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

// TODO: 보여주기용 더미 값. 실제 정보로 교체할 것
export const profile: Profile = {
  name: "이땡땡",
  bio: "클로드 개발 꿈나무",
  image: "/profile-placeholder.svg",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com/" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com/" },
    { id: "blog", title: "Blog", url: "https://example.com/" },
  ],
};
