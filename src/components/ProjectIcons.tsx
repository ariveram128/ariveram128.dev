import { 
  FaSnowflake, 
  FaMicrochip, 
  FaGamepad,
  FaBrain,
  FaWifi,
  FaSkiing,
  FaMemory,
  FaBolt,
  FaJava,
  FaWaveSquare
} from "react-icons/fa";
import { 
  GiSkis,
  GiCpu,
  GiElectric,
  GiSoundWaves
} from "react-icons/gi";
import { 
  BsSnow,
  BsCodeSlash,
  BsDatabase,
  BsShield
} from "react-icons/bs";
import { 
  SiDjango,
  SiPython,
  SiSqlite
} from "react-icons/si";
import {
  MdMemory,
  MdGraphicEq,
  MdSettingsInputComponent
} from "react-icons/md";

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

      case "memory-data-logging":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700">
            {/* Memory & Data Systems */}
            <div className="relative">
              <MdMemory className="h-20 w-20 text-white" />
              <FaMemory className="h-8 w-8 text-cyan-300 absolute -top-2 -right-2" />
              
              {/* SPI/I2C Communication lines */}
              <div className="absolute inset-0">
                <div className="absolute top-4 left-2 h-1 w-6 bg-green-400 rounded" />
                <div className="absolute top-6 left-2 h-1 w-8 bg-blue-400 rounded" />
                <div className="absolute bottom-4 right-2 h-1 w-6 bg-yellow-400 rounded" />
                <div className="absolute bottom-6 right-2 h-1 w-8 bg-orange-400 rounded" />
              </div>
              
              {/* Data flow indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="h-2 w-2 bg-white rounded-full animate-bounce" />
                <div className="h-1 w-1 bg-white/70 rounded-full animate-bounce mt-1" style={{ animationDelay: "0.2s" }} />
              </div>
            </div>
          </div>
        );

      case "boost-converter":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-600">
            {/* Power Electronics */}
            <div className="relative">
              <GiElectric className="h-20 w-20 text-white" />
              <FaBolt className="h-8 w-8 text-yellow-300 absolute -top-2 -left-2" />
              <MdSettingsInputComponent className="h-6 w-6 text-blue-300 absolute -bottom-2 -right-2" />
              
              {/* Voltage indicators */}
              <div className="absolute inset-0">
                <div className="absolute top-2 left-6 text-xs font-bold text-white bg-green-500 px-1 rounded">5V</div>
                <div className="absolute bottom-2 right-4 text-xs font-bold text-white bg-red-500 px-1 rounded">14V</div>
              </div>
              
              {/* PWM wave visualization */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <FaWaveSquare className="h-4 w-4 text-cyan-300 animate-pulse" />
              </div>
            </div>
          </div>
        );

      case "uva-course-review":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
            {/* Database Application */}
            <div className="relative">
              <BsDatabase className="h-20 w-20 text-white" />
              <FaJava className="h-8 w-8 text-orange-400 absolute -top-2 -right-2" />
              <SiSqlite className="h-6 w-6 text-blue-300 absolute -bottom-2 -left-2" />
              <BsShield className="h-6 w-6 text-green-400 absolute top-2 left-2" />
              
              {/* Data entries */}
              <div className="absolute inset-0">
                <div className="absolute top-6 right-4 h-1 w-3 bg-white/60 rounded" />
                <div className="absolute top-8 right-4 h-1 w-4 bg-white/60 rounded" />
                <div className="absolute top-10 right-4 h-1 w-2 bg-white/60 rounded" />
                
                <div className="absolute bottom-6 left-4 h-1 w-3 bg-white/60 rounded" />
                <div className="absolute bottom-8 left-4 h-1 w-4 bg-white/60 rounded" />
                <div className="absolute bottom-10 left-4 h-1 w-2 bg-white/60 rounded" />
              </div>
              
              {/* University badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="text-xs font-bold text-white bg-orange-500 px-2 py-1 rounded-full">UVA</div>
              </div>
            </div>
          </div>
        );

      case "audio-spectrum-analyzer":
        return (
          <div className="relative h-full w-full flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-600">
            {/* Signal Processing */}
            <div className="relative">
              <MdGraphicEq className="h-20 w-20 text-white" />
              <GiSoundWaves className="h-8 w-8 text-cyan-300 absolute -top-2 -right-2" />
              
              {/* Frequency bars */}
              <div className="absolute inset-0 flex items-end justify-center gap-1">
                <div className="h-3 w-1 bg-green-400 rounded animate-pulse" />
                <div className="h-5 w-1 bg-yellow-400 rounded animate-pulse" style={{ animationDelay: "0.1s" }} />
                <div className="h-8 w-1 bg-orange-400 rounded animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="h-6 w-1 bg-red-400 rounded animate-pulse" style={{ animationDelay: "0.3s" }} />
                <div className="h-4 w-1 bg-purple-400 rounded animate-pulse" style={{ animationDelay: "0.4s" }} />
              </div>
              
              {/* Filter indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="text-xs font-bold text-white bg-blue-500 px-1 rounded">745Hz</div>
              </div>
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="text-xs font-bold text-white bg-green-500 px-1 rounded">500Hz</div>
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
