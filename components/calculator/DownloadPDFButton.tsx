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
        if (!element) return;

        // Temporarily remove overflow restrictions from all elements inside to avoid capturing scrollbars
        const scrollElements = element.querySelectorAll('.overflow-x-auto, .overflow-y-auto');
        const originalStyles: { el: Element, key: string, val: string }[] = [];

        scrollElements.forEach(el => {
            originalStyles.push({ el, key: 'overflow', val: (el as HTMLElement).style.overflow });
            (el as HTMLElement).style.overflow = 'visible';
        });

        try {
            setIsDownloading(true);
            const imgData = await toPng(element, {
                cacheBust: true,
                style: { backgroundColor: '#ffffff' },
                pixelRatio: 2
            });

            // Create a temporary image to get natural dimensions
            const img = new window.Image();
            img.src = imgData;
            await new Promise((resolve) => { img.onload = resolve });

            const pdfWidth = img.naturalWidth;
            const pdfHeight = img.naturalHeight;

            // Generate a single continuous PDF page so tables and charts never get cut off
            const pdf = new jsPDF({
                orientation: pdfWidth > pdfHeight ? "landscape" : "portrait",
                unit: "px",
                format: [pdfWidth, pdfHeight]
            });

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(filename);

        } catch (error: any) {
            console.error("Error generating PDF:", error);
            alert(`Failed to generate PDF. Please try again. Error: ${error?.message || "Unknown error"}`);
        } finally {
            // Restore original styles
            originalStyles.forEach(({ el, key, val }) => {
                if (val) {
                    (el as HTMLElement).style.setProperty(key, val);
                } else {
                    (el as HTMLElement).style.removeProperty(key);
                }
            });
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
