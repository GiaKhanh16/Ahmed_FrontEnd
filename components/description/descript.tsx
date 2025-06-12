import { FileText, Image, Cpu, Mail } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Engaging and high-quality content crafted to captivate your audience and boost your brand's visibility.",
  },
  {
    icon: Image,
    title: "Social Media Branding",
    description:
      "Consistent and impactful branding across social platforms to strengthen your online presence.",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description:
      "Streamlined processes with AI-driven solutions to save time and enhance efficiency.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Targeted email campaigns designed to nurture leads and drive conversions.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="flex items-center pt-15 sm:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 sm:gap-4">
              <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-2 sm:p-3 flex-shrink-0">
                <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
