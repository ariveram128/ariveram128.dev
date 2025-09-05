import { 
  FaSnowflake, 
  FaMicrochip, 
  FaGamepad,
  FaBrain,
  FaWifi,
  FaSkiing
} from "react-icons/fa";
import { 
  GiSkis,
  GiCpu
} from "react-icons/gi";
import { 
  BsSnow,
  BsCodeSlash
} from "react-icons/bs";
import { 
  SiDjango,
  SiPython
} from "react-icons/si";

interface ProjectIconProps {
  projectId: string;
  className?: string;
}

export default function ProjectIcon({ projectId, className = "h-full w-full" }: ProjectIconProps) {
  const renderIcon = () => {
    switch (projectId) {
      case "rentscan-nfc":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
            {/* NFC/Wireless Communication */}
            <div className="relative">
              <FaWifi className="h-16 w-16 text-white absolute top-0 left-4" />
              <FaMicrochip className="h-20 w-20 text-yellow-300 relative z-10" />
              {/* Animated waves */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-32 w-32 border-2 border-white/30 rounded-full animate-ping" />
                <div className="absolute h-40 w-40 border-2 border-white/20 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>
          </div>
        );

      case "riscv-uart":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-600">
            {/* CPU Architecture */}
            <div className="relative">
              <GiCpu className="h-24 w-24 text-white" />
              {/* Circuit traces */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-4 h-2 w-8 bg-yellow-300 rounded" />
                <div className="absolute top-8 right-4 h-2 w-6 bg-yellow-300 rounded" />
                <div className="absolute bottom-4 left-6 h-2 w-10 bg-yellow-300 rounded" />
                <div className="absolute bottom-8 right-6 h-2 w-4 bg-yellow-300 rounded" />
              </div>
            </div>
          </div>
        );

      case "skirentals-web":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-cyan-500">
            {/* Winter Sports Equipment */}
            <div className="relative">
              <FaSnowflake className="h-8 w-8 text-white absolute -top-2 -left-2 animate-spin" style={{ animationDuration: "8s" }} />
              <FaSnowflake className="h-6 w-6 text-white/70 absolute -top-1 right-4 animate-spin" style={{ animationDuration: "12s" }} />
              <BsSnow className="h-4 w-4 text-white/50 absolute bottom-0 -left-1" />
              
              <div className="flex items-center gap-2">
                <GiSkis className="h-20 w-20 text-white transform -rotate-12" />
                <FaSkiing className="h-12 w-12 text-gray-200" />
              </div>
              
              <SiDjango className="h-8 w-8 text-green-400 absolute -bottom-2 -right-2" />
            </div>
          </div>
        );

      case "candyninja":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600">
            {/* Gaming/Microcontroller */}
            <div className="relative">
              <FaGamepad className="h-20 w-20 text-white" />
              <FaMicrochip className="h-8 w-8 text-yellow-300 absolute -top-2 -right-2" />
              
              {/* Game elements */}
              <div className="absolute -bottom-4 -left-4">
                <div className="h-3 w-3 bg-red-400 rounded-full animate-bounce" />
                <div className="h-2 w-2 bg-yellow-400 rounded-full animate-bounce mt-1" style={{ animationDelay: "0.2s" }} />
              </div>
              
              <div className="absolute -top-4 right-0">
                <div className="h-2 w-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                <div className="h-3 w-3 bg-blue-400 rounded-full animate-bounce mt-1" style={{ animationDelay: "0.6s" }} />
              </div>
            </div>
          </div>
        );

      case "nlp-bias-research":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-600">
            {/* AI/ML Research */}
            <div className="relative">
              <FaBrain className="h-20 w-20 text-white" />
              <SiPython className="h-8 w-8 text-yellow-400 absolute -bottom-2 -right-2" />
              
              {/* Data nodes */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-2 h-2 w-2 bg-white rounded-full animate-pulse" />
                <div className="absolute top-4 right-4 h-2 w-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                <div className="absolute bottom-3 left-4 h-2 w-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                <div className="absolute bottom-2 right-2 h-2 w-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.9s" }} />
                
                {/* Connection lines */}
                <div className="absolute top-3 left-3 h-px w-4 bg-white/50 transform rotate-45" />
                <div className="absolute bottom-4 left-5 h-px w-6 bg-white/50 transform -rotate-12" />
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-500 to-gray-600">
            <BsCodeSlash className="h-16 w-16 text-white" />
          </div>
        );
    }
  };

  return (
    <div className={className}>
      {renderIcon()}
    </div>
  );
}
