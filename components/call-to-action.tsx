import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="py-6">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-15">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Interesse an einer Probefahrt?</h2>
                    <p className="mt-4">Wir freuen uns auf Ihren persönlichen Besuch bei uns!</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg">
                            <Link href="/">
                                <span>Jetzt Probefahrt buchen</span>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline">
                            <Link href="https://www.autoscout24.ch/de/d/cupra-formentor-25tsi-vz5-bat-x-abt-4drive-dsg-12420232">
                                <span>Unser Inserat mit allen Details</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
