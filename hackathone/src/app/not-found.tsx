import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm">
        <div className="p-6 text-center">
          <div className="relative w-full h-40 mb-6">
            <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-gray-200">
              404
            </div>
            <Image
              src="https://sjc.microlink.io/MZxl5MLXhOqUpO3fdPGdo1C_WJeSEXj8XcWiCjQQWCF_-TOiqJsNBh6oFRqThA9cSSNllqV_lCwzGs87osRsPQ.jpeg"
              alt="404 Illustration"
              width={400}
              height={300}
              className="object-contain mx-auto"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">This is not the page you are looking for</h1>
          <p className="text-gray-600 mb-6">
            The page you&apos;re trying to access doesn&apos;t exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  )
}

