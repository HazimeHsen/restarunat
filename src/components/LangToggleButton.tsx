// components/LangToggleButton.tsx
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "./LangModal";
import { useRouter, useSearchParams } from "next/navigation";

interface Language {
  id: string;
  name: string;
  flag: string;
}

const LangToggleButton: React.FC = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("english");
  const searchParams = useSearchParams();

  const languages: Language[] = [
    { id: "english", name: "English", flag: "/usa.png" },
    { id: "arabic", name: "Arabic", flag: "/leb.png" },
  ];

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    closeModal();

    // Update the URL with the selected language
    router.push(`menu/?lang=${language}`);
  };

  useEffect(() => {
    const lang = searchParams.get("lang");
    setSelectedLanguage(lang || "english");
  }, [searchParams]);

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center rounded-full p-2 focus:outline-none"
        onClick={openModal}>
        <Image
          alt={selectedLanguage}
          src={languages.find((lang) => lang.id === selectedLanguage)?.flag!}
          width={30}
          height={30}
        />
      </button>

      <Modal isOpen={isModalOpen} closeModal={closeModal} position="below">
        <div className="flex flex-col items-center space-y-4">
          {languages.map((lang) => (
            <button
              key={lang.id}
              className="flex items-center justify-center rounded-full p-2 focus:outline-none"
              onClick={() => handleLanguageChange(lang.id)}>
              <Image alt={lang.name} src={lang.flag} width={30} height={30} />
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default LangToggleButton;
