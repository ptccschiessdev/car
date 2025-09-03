import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-15">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Herr Meier stellt Ihnen den Neuwagen persönlich vor.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Uns ist der persönliche Berührungspunkt von Essenz. <span className="text-accent-foreground font-bold">Wir beraten Sie persönlich und individuell</span> — Von der Probefahrt bis zum Kauf.
                        </p>
                        <p className="text-muted-foreground">Herr Meier ist seit 5 Jahren Cupra Spezialist — Er stellt Ihnen die Kennzahlen in diesem Video vor. Seine persönliche Highlights sind:</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Cupra Drive Profile</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">mit "driving experience button" Comfort, Sport, CUPRA, Individual, Snow, Offroad</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Fahrerassistenzpaket XL</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Autonomer Ausparkassistent sowie Spurwechselassistent führen zu ultimativem Komfort</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                                        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                                                            <iframe
                                                                id="ik-vod-1jijk03u51hg0"
                                                                className="ik-player-1jijk03u51hfu ik-embed"
                                                                src="https://player.vod2.infomaniak.com/embed/1jijk03u51hg0"
                                                                width="100%"
                                                                height="100%"
                                                                style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                                                                allowFullScreen
                                                                frameBorder="0"
                                                                allow="autoplay; fullscreen; picture-in-picture"
                                                                title="audi finished"
                                                            ></iframe>
                                                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
