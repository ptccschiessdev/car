import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-20">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-4xl font-medium lg:text-5xl">Qualität das durch unsere Adern fliesst.</h2>
                    <p>Wir setzen auf höchste Standards und eine persönliche Betreuung, um Ihnen das beste Erlebnis zu bieten.</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">Die Firma Wegmüller, v.a. Nico, ist eine super Firma. Sehr freundlich, unkompliziert, speditiv und kompetent. Der Service lässt keine Wünsche offen, alle Erwartungen wurden nur übertroffen und ich habe mich super aufgehoben gefühlt. Machten sogar Unmögliches möglich! Mein nächstes Auto würde ich sofort wieder bei der Firma Wegmüller bestellen. Vielen herzlichen Dank!!!!!!!!!!</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <div>
                                        <cite className="text-sm font-medium">Markus Müller</cite>
                                       {/* <span className="text-muted-foreground block text-sm">Software Ingineer</span> */}
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-5">
                            <blockquote className="grid h-25 grid-rows-[1fr_auto] gap-0">
                                <p className="text-xl font-medium">Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.</p>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-35 grid-rows-[1fr_auto] gap-0">
                                <p className="text-l font-medium">Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.</p>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-35 grid-rows-[1fr_auto] gap-0">
                                <p className="text-l font-medium">Tailus is really extraordinary and very practical, no need to break your head. A real gold mine.</p>
                                        <cite className="text-sm font-medium">Jonathan Yombo</cite>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
