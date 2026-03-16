import Link from "next/link";
import { Calculator, FileText } from "lucide-react";

interface InternalLinksProps {
    calculators?: { name: string; href: string }[];
    articles?: { name: string; href: string }[];
}

export default function InternalLinks({ calculators = [], articles = [] }: InternalLinksProps) {
    if (calculators.length === 0 && articles.length === 0) return null;

    return (
        <div className="mt-20 border-t border-border pt-12 pb-16">
            <div className="grid md:grid-cols-2 gap-12">
                {calculators.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                            <Calculator className="w-5 h-5 text-primary" />
                            Related Calculators
                        </h3>
                        <div className="grid gap-3">
                            {calculators.map((calc) => (
                                <Link
                                    key={calc.href}
                                    href={calc.href}
                                    className="p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-text-primary font-medium group-hover:text-primary">{calc.name}</span>
                                    <span className="text-text-muted transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {articles.length > 0 && (
                    <div>
                        <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-primary" />
                            Helpful Guides
                        </h3>
                        <div className="grid gap-3">
                            {articles.map((article) => (
                                <Link
                                    key={article.href}
                                    href={article.href}
                                    className="p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all group flex items-center justify-between"
                                >
                                    <span className="text-text-primary font-medium group-hover:text-primary">{article.name}</span>
                                    <span className="text-text-muted transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">→</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
