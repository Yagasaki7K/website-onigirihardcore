import Image from 'next/image'

export default function Avatar() {
    return (
        <div className="flex items-center">
            <div className="w-12 h-12 relative mr-4">
                <Image src="https://github.com/Yagasaki7K.png" width={96} height={96}
                    className="avatar"
                    alt='Anderson "Yagasaki" Marlon'
                />
            </div>
            <div className="text-xl font-bold">Anderson "Yagasaki" Marlon</div>
        </div>
    )
}
