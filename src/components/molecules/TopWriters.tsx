// components/TopWriters.tsx
import Image from 'next/image'

interface Writer {
  id: number
  fullName: string
  image: string
  postCount: number
}

interface TopWritersProps {
  writers: Writer[]
}

export default function TopWriters({ writers }: TopWritersProps) {
  return (
    <div className="flex flex-col gap-4 border border-black4 rounded-lg px-4 py-3">
      <h3 className="text-body1 font-bold dark:text-black3">RideOn Top Writers</h3>
      <ul className="flex flex-col gap-2">
        {writers.length === 0 ? (
          <li className="text-body2 text-black5 dark:text-black3">
            작성자가 없습니다.
          </li>
        ) : (
          writers.map((writer) => (
            <li key={writer.id} className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                <div className="w-5 h-5 rounded-full overflow-hidden">
                  <Image
                    src={writer.image}
                    alt={`${writer.fullName}의 프로필 사진`}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <span className="text-body1 font-light dark:text-black3">{writer.fullName}</span>
              </div>
              <span className="text-body2 text-black5 font-light dark:text-black3">
                {new Intl.NumberFormat().format(writer.postCount)}
              </span>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}
