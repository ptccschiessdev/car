import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'
import Image from 'next/image'

export default function FeaturesSection() {
    // Set textPosition to 'left', 'center', or 'right' as needed
    const textPosition = 'left';
    return (
        <section className="bg-gray-50 py-16 md:py-20 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <svg
                                        className="text-muted absolute inset-0 size-full"
                                        viewBox="0 0 254 104"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="mx-auto block w-fit text-3xl font-semibold">65'500 CHF</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold">Leasing möglich</h2>
                                <p className="mt-6 text-center text-lg font-semibold">Ab 768.- Pro Monat ohne Anzahlung.</p>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className=" mx-auto flex size-50 rounded-full border before:absolute before:-inset-2">
                                    <Image
                                        src="/20250831_1stCarRigTesting/I97A4792.jpg"
                                        alt="Car Feature"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                                        fill
                                        priority
                                    />
                                </div>
                                <div className="relative z-20 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-250 text-lg font-medium transition dark:text-white">450 PS</h2>
                                    <p className="text-foreground">Benzin mit Allrad bringt Sie durch jedes Gelände.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                            <CardContent className="pt-6">
                                <div className="absolute inset-0 w-[155%] h-full overflow-hidden rounded-xl">
                                    <iframe
                                        src="https://player.vod2.infomaniak.com/embed/1jijk03u51dh8"
                                        className="absolute left-1/2 top-1/2 w-[140%] h-[140%] -translate-x-1/2 -translate-y-1/2 z-0"
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture"
                                        title="Cupra - Air"
                                        style={{ display: 'block', borderRadius: 'inherit' }}
                                    ></iframe>
                                </div>
                                <div className={`relative z-10 mt-5 space-y-2 text-${textPosition ?? 'bottom'}`}> 
                                    <h2 className="text-lg font-medium transition">600 KM</h2>
                                    <p className="text-foreground">Der Neuwagen hat mit 24 Monaten Garantie keinen Spielraum für Mängel.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="space-y-20">
                                        <h2 className="group-hover:text-secondary-950 text-lg font-medium text-zinc-800 transition dark:text-white">2024 Jahrgang</h2>
                                        <p className="text-foreground">Neuste Technologie für ein unvergleichliches Fahrerlebnis.</p>
                                    </div>
                                </div>
                                    <Image
                                        src="/20250831_1stCarRigTesting/I97A4844.jpg"
                                        alt="Car Feature"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                                        fill
                                        priority
                                    />
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">BAT x ABT 1/400</h2>
                                        <p className="text-foreground">Das Prachtstück lässt die Blicke auf Sie gerichtet.</p>
                                    </div>
                                </div>
                                    <Image
                                        src="/20250831_1stCarRigTesting/I97A4829.jpg"
                                        alt="Car Feature"
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl z-0"
                                        fill
                                        priority
                                    />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
