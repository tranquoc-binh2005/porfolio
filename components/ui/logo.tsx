import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="relative h-8 w-8">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
            fill="#7F56D9"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.6667 8H21.3333C22.8061 8 24 9.19391 24 10.6667V21.3333C24 22.8061 22.8061 24 21.3333 24H10.6667C9.19391 24 8 22.8061 8 21.3333V10.6667C8 9.19391 9.19391 8 10.6667 8ZM12 12C11.4477 12 11 12.4477 11 13V19C11 19.5523 11.4477 20 12 20H20C20.5523 20 21 19.5523 21 19V13C21 12.4477 20.5523 12 20 12H12Z"
            fill="white"
          />
        </svg>
      </div>
      <span className="text-xl font-bold text-gray-900">Untitled UI</span>
    </Link>
  )
}
