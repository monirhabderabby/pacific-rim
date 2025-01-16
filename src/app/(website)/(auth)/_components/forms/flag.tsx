import Image from 'next/image'

interface FlagProps {
  src: string
  alt: string
  selected?: boolean
  onClick?: () => void
}

export function Flag({ src, alt, selected = false, onClick }: FlagProps) {
  return (
    <button
      onClick={onClick}
      className={`relative p-2 rounded-lg transition-all ${
        selected
          ? 'ring-4 ring-[#37B24D] ring-opacity-50'
          : 'ring-1 ring-gray-200 hover:ring-[#37B24D] hover:ring-opacity-50'
      }`}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={200}
        height={120}
        className="rounded-md"
      />
    </button>
  )
}

