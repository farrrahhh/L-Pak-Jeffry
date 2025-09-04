"use client"

import { useState } from "react"
import { Heart, ArrowLeft, Sparkles } from "lucide-react"

export default function PostcardFlip() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-amber-50 to-orange-100 p-4 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-amber-200/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-10 w-12 h-12 bg-rose-200/50 rounded-full blur-md"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-200/40 rounded-full blur-sm"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-pink-300/30 rounded-full blur-sm"></div>
      </div>

      <div className="absolute top-20 left-1/4 text-amber-300/60">
        <Sparkles className="w-6 h-6 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-1/4 text-rose-300/60">
        <Sparkles className="w-4 h-4 animate-pulse delay-1000" />
      </div>
      <div className="absolute top-1/2 right-20 text-orange-300/60">
        <Sparkles className="w-5 h-5 animate-pulse delay-500" />
      </div>

      <div className="w-full max-w-sm mx-auto perspective-1000 relative z-10">
        <div
          className={`relative w-full h-[600px] transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
        >
          {/* Front of postcard */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white border-4 border-white">
            <div className="relative w-full h-full">
              <img
                src="/images/jeffry-postcard.png"
                alt="Postcard with memories and annotations for Pak Jeffry"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
              </div>
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                Tap to read letter
              </div>
            </div>
          </div>

          {/* Back of postcard - Letter content */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-6 overflow-y-auto border-4 border-white">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleFlip()
                  }}
                  className="flex items-center gap-2 text-amber-700 hover:text-amber-900 transition-colors font-sans"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm font-medium">Back to postcard</span>
                </button>
                <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
              </div>

              <div className="flex-1 space-y-4">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-amber-900 mb-2 font-serif">For Pak Jeffry</h1>
                  <p className="text-sm text-amber-600 italic font-serif">From: Farah</p>
                  <div className="w-16 h-0.5 bg-amber-400 mx-auto mt-2"></div>
                </div>

                <div className="letter-content text-amber-800 font-serif text-base space-y-4">
                  <p>Hi Pak Jeffry,</p>

                  <p>
                    Thank you so much for your time and guidance over the past 3 months.  
                    I’ve learned a lot, not only about soft skills but also about how to work professionally and deliver my best wherever I am.
                  </p>

                  <p>
                    I also want to thank you for giving me the chance to intern at Oppo. To be honest, at that time it was quite a sad moment for me since many companies rejected me because I wasn’t immediately available to start working. But Oppo gave me the opportunity, and from there I gained such valuable experiences and amazing new friends.
                  </p>

                  <p>
                    I’ve learned so many insights under your guidance—how to improve communication, work more effectively, and even how to stand out in a professional environment. All the feedback and advice you gave really meant a lot for my personal growth.
                  </p>

                  <p>
                    Please keep us interns in your prayers so that our next steps will be smooth and successful. Hopefully, we can also stay connected, Pak!  
                    And of course… still waiting for that trip to Puncak (*climbing Semeru? hwhw) together.
                  </p>

                  <p>
                    Once again, thank you so much. Wishing you good health, continued success in your career, and happiness for you and your family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-amber-700 text-sm font-medium font-sans">
          Tap the postcard to flip between front and letter
        </p>
      </div>
    </div>
  )
}
