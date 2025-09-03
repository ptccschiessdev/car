import Image from 'next/image'

export default function ContentSectionBottom() {
    return (
        <section className="py-16 md:py-6">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Unser Betrieb ist seit 20 Jahren Ihr zuverlässiger Partner.</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative mb-6 sm:mb-0">
                        <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
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

                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            Gemini is evolving to be more than just the models. <span className="text-accent-foreground font-bold">It supports an entire ecosystem</span> — from products innovate.
                        </p>
                        <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>

                        <div className="pt-6">
                            <blockquote className="border-l-4 pl-4">
                                <p>Using TailsUI has been like unlocking a secret design superpower. The perfect fusion of simplicity and versatility, enabling us to create UIs that are as stunning as they are user-friendly.</p>

                                <div className="mt-6 space-y-3">
                                    <cite className="block font-medium">John Doe, CEO</cite>
                                   <img className="h-5 w-fit dark:invert" src="/testlogo.png" alt="Nvidia Logo" height="20" width="auto" /> 
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
