export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  /** public/ 아래 이미지 경로 (예: "/profile.jpg"). 비워 두면 이름 첫 글자를 표시 */
  image?: string;
  links: LinkItem[];
};

export const profile: Profile = {
  name: "지미니",
  bio: "클로드 개발 꿈나무 🌱 사내 프로젝트 진행 중이에요",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "🐙 깃허브", url: "https://github.com/jeemin2115" },
    { id: "email", title: "📮 이메일", url: "mailto:jeemin.2115@gmail.com" },
    { id: "instagram", title: "📷 인스타그램", url: "https://www.instagram.com/__zzming" },
  ],
};
