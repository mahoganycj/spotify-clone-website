
import Link from "next/link";

const QueueIcon = () => (
  <Link href={`/queue`}>
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32}  className="fill-neutral-500 hover:scale-110 hover:fill-white cursor-pointer">

      <path
        fillRule="evenodd"
        d="M22 9H10a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1ZM10 7a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3H10ZM7 17h18v2.5H7V17Zm18 6H7v2.5h18V23Z"
        clipRule="evenodd"
        opacity={0.7}
      />
    </svg>
    </Link>
  )
  export default QueueIcon;
  