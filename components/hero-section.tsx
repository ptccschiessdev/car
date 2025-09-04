import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/header'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { ChevronRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <>
          {/* <HeroHeader /> */}
          {/*  <main className="overflow-x-hidden"> */}
                <section>
                    <div className="relative py-24 md:pb-32 lg:pb-36 lg:pt-72 aspect-video min-h-[50px]">
                        {/* Hero Title and value statement */}
                        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:block lg:px-12"> 
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1
                                    className="mt-4 max-w-2xl text-balance text-[clamp(2rem,6vw,3.5rem)] sm:text-4xl md:text-5xl lg:mt-16 xl:text-7xl"
                                    style={{ lineHeight: 1.1 }}
                                >
                                    When Power is unleashed
                                </h1>
                                <p
                                    className="mt-4 max-w-2xl text-balance text-[clamp(1rem,3vw,1.25rem)] sm:text-base md:text-lg"
                                    style={{ lineHeight: 1.3 }}
                                >
                                    The Cupra Formentor VZ5 ABT leaves no space for desire.
                                </p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    {/*<Button
                                        asChild
                                        size="lg"
                                        className="h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button> */}
                                </div>
                            </div>
                        </div>
                            <div className="absolute inset-0 -z-10 w-full aspect-video rounded-3xl overflow-hidden bg-background">
                                                    <iframe
                                                        src="https://player.vod2.infomaniak.com/embed/1jijk03u51dh8"
                                                        className="w-full h-full"
                                                        allowFullScreen
                                                        frameBorder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture"
                                                        title="Cupra - Air"
                                                        style={{ display: 'block', borderRadius: 'inherit' }}
                                                    ></iframe>
                            </div>
                </div>
                </section>
           {/* </main> */}
        </>
    )
}
