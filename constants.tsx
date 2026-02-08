
import { Project, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Harun Duman",
  role: "Grafik Tasarımcı",
  university: "İstanbul Gelişim Üniversitesi",
  degree: "Grafik Tasarım Bölümü",
  email: "harunduman5456@gmail.com",
  linkedin: "https://www.linkedin.com/in/harun-duman-923b5a329/",
  instagram: "instagram.com/harun.graphics",
  bio: "Görsel hikayeler anlatmayı ve markaların ruhunu tasarımlarımda yaşatmayı seviyorum. Minimalist ama etkili çözümler sunmaya odaklıyım."
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nocturnal Markalama",
    category: "Kurumsal Kimlik",
    images: [
      "https://plus.unsplash.com/premium_photo-1769019242610-1fae526340cc?q=80&w=787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Modern bir gece kulübü için tasarlanmış minimalist kurumsal kimlik çalışması.",
    year: "2023"
  },
  {
    id: "2",
    title: "Ether Dergi",
    category: "Yayıncılık",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Sanat ve mimari odaklı, deneysel tipografi kullanılan dergi tasarımı.",
    year: "2023"
  },
  {
    id: "3",
    title: "Vivid Arayüz Seti",
    category: "Arayüz Tasarımı",
    images: [
      "https://images.unsplash.com/photo-1770386750279-1222d8f188a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Mobil uygulamalar için geliştirilmiş canlı renk paletli arayüz bileşenleri.",
    year: "2024"
  },
  {
    id: "4",
    title: "Solaris Afiş Serisi",
    category: "Baskı",
    images: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "İklim değişikliği farkındalığı yaratmak adına hazırlanan soyut afiş serisi.",
    year: "2022"
  },
  {
    id: "5",
    title: "Monolith Kimlik",
    category: "Görsel Kimlik",
    images: [
      "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Bir mimarlık ofisi için tasarlanan geometrik ve monokromatik logo çalışması.",
    year: "2024"
  },
  {
    id: "6",
    title: "Aura Ambalaj Tasarımı",
    category: "Ambalaj",
    images: [
      "https://images.unsplash.com/photo-1605648916319-cf082f7524a1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Lüks kozmetik markası için sürdürülebilir ve estetik paketleme tasarımı.",
    year: "2023"
  }
];
