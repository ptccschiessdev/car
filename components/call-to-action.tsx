"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import SignupForm from '@/components/ui/signup-form'
export default function CallToAction() {
    const [open, setOpen] = useState(false);
    return (
        <section className="py-6">
            <div className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-15">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Interesse an einer Probefahrt?</h2>
                    <p className="mt-4">Wir freuen uns auf Ihren persönlichen Besuch bei uns!</p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button size="lg" onClick={() => setOpen(true)}>
                            <span>Jetzt Probefahrt buchen</span>
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
            {/* Modal for signup form */}
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="relative z-60"
                        >
                            <button
                                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black"
                                onClick={() => setOpen(false)}
                                aria-label="Schließen"
                            >
                                ×
                            </button>
                            <SignupForm />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
