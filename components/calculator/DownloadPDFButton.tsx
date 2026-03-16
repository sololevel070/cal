"use client";

import { useState } from "react";
import Image from "next/image";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

interface DownloadPDFButtonProps {
    elementId?: string;
    filename?: string;
    iconOnly?: boolean;
}

export default function DownloadPDFButton({
    elementId = "calculator-results",
    filename = "calculator-results.pdf",
    iconOnly = false,
}: DownloadPDFButtonProps) {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        const element = document.getElementById(elementId);
        if (!element) {
            console.error(`[PDF] Element with ID ${elementId} not found`);
            alert("Error: Results panel not found. Please try again.");
            return;
        }

        const originalStyle = element.style.cssText;

        // Inject temporary style to hide scrollbars globally for the capture
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            #${elementId} *::-webkit-scrollbar { display: none !important; }
            #${elementId} * { scrollbar-width: none !important; -ms-overflow-style: none !important; }
        `;
        document.head.appendChild(styleTag);

        try {
            console.log(`[PDF] Starting capture for ${elementId}...`);
            setIsDownloading(true);

            // Give a moment for any lazy-loaded charts to settle
            await new Promise(resolve => setTimeout(resolve, 800));

            // Find all scrollable containers and force them to show full content
            const scrollContainers = element.querySelectorAll('.overflow-auto, .overflow-x-auto, .overflow-y-auto');
            const containerStyles: { el: HTMLElement, original: string }[] = [];

            scrollContainers.forEach(container => {
                const el = container as HTMLElement;
                containerStyles.push({ el, original: el.style.cssText });
                el.style.overflow = 'visible';
                el.style.height = 'auto';
                el.style.maxHeight = 'none';
            });

            // Force main element to be fully expanded
            element.style.height = 'auto';
            element.style.overflow = 'visible';

            const width = element.offsetWidth;
            const height = element.scrollHeight;

            console.log(`[PDF] Capturing: ${width}x${height}`);

            const imgData = await toPng(element, {
                cacheBust: true,
                style: {
                    backgroundColor: '#f8fafc',
                    borderRadius: '0',
                    margin: '0',
                    padding: '20px',
                },
                width: width + 40,
                height: height + 40,
                pixelRatio: 1.5,
            });

            console.log("[PDF] Image generated. Creating PDF blob...");

            const pdfHeight = height + 40;
            const pdfWidth = width + 40;

            const pdf = new jsPDF({
                orientation: pdfWidth > pdfHeight ? "l" : "p",
                unit: "px",
                format: [pdfWidth, pdfHeight],
                hotfixes: ["px_scaling"]
            });

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, 'FAST');

            const blob = pdf.output('blob');
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            console.log("[PDF] Download initiated successfully!");

            // Restore scroll container styles
            containerStyles.forEach(({ el, original }) => {
                el.style.cssText = original;
            });

        } catch (error: any) {
            console.error("[PDF] Error:", error);
            alert(`PDF Generation failed. Error: ${error?.message || "Unknown error"}`);
        } finally {
            element.style.cssText = originalStyle;
            if (document.head.contains(styleTag)) {
                document.head.removeChild(styleTag);
            }
            setIsDownloading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleDownload}
            disabled={isDownloading}
            className={iconOnly
                ? "w-12 h-12 flex flex-shrink-0 items-center justify-center bg-primary hover:brightness-110 text-white rounded-full transition-all disabled:opacity-50 shadow-sm"
                : "flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 bg-primary hover:brightness-110 text-white font-semibold rounded-xl transition-all disabled:opacity-50 shadow-sm"
            }
            title={iconOnly ? "Download PDF" : undefined}
            aria-label="Download PDF"
        >
            {isDownloading ? (
                <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {!iconOnly && <span>Generating PDF...</span>}
                </>
            ) : (
                <>
                    <Image
                        src="/download-svgrepo-com.svg"
                        alt="Download"
                        width={20}
                        height={20}
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                    {!iconOnly && <span>Download PDF</span>}
                </>
            )}
        </button>
    );
}
