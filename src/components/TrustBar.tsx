import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mt-12 pt-8 border-t border-white/20 flex flex-wrap gap-8">
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-white">
          {isInView ? <CountUp end={12} duration={2.5} /> : "0"}+
        </span>
        <span className="text-sm text-gray-400">Tahun Pengalaman</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-white">
          {isInView ? <CountUp end={40} duration={2.5} /> : "0"}+
        </span>
        <span className="text-sm text-gray-400">Klien</span>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-white">
          {isInView ? <CountUp end={3} duration={2} /> : "0"}
        </span>
        <span className="text-sm text-gray-400">Sertifikasi Nasional</span>
      </div>
    </div>
  );
}
