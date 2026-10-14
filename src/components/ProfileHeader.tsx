import Image from "next/image";

type Props = {
  name: string;
  bio: string;
  image?: string;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative size-24 overflow-hidden rounded-full bg-emerald-200 ring-4 ring-white sm:size-28">
        {image ? (
          <Image src={image} alt={`${name} 프로필 사진`} fill sizes="112px" className="object-cover" priority />
        ) : (
          <span className="flex size-full items-center justify-center text-3xl font-bold text-emerald-800">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-7 text-xl font-bold">{name}</h1>
      <p className="mt-1 text-sm text-stone-600">{bio}</p>
    </header>
  );
}
