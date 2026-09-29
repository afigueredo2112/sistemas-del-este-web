import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Indicator, { IndicatorLines } from '../Indicator';

export default function Portal({ href, tone, name, tagline, cta, image, alt, indicators, hub, tags }) {
  return (
    <Link className={`portal portal-${tone}`} href={href}>
      <div className="portal-media">
        <Image src={image} alt={alt} fill priority sizes="(max-width: 860px) 100vw, 50vw" className="portal-img" />
        <div className="photo-shade" aria-hidden="true" />
        <IndicatorLines tone={tone} hub={hub} points={indicators.filter((i) => !i.hub).map((i) => [i.x, i.y])} />
        {indicators.map((i, idx) => (
          <Indicator key={i.label} {...i} tone={tone} delay={400 + idx * 180} />
        ))}
      </div>
      <div className="portal-body">
        <p className="micro">SISTEMAS DEL ESTE</p>
        <h2>{name}</h2>
        <p className="portal-tagline">{tagline}</p>
        <ul className="portal-tags">
          {tags.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon aria-hidden="true" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>
        <span className="portal-cta">
          {cta}
          <ArrowRight aria-hidden="true" strokeWidth={2} />
        </span>
      </div>
    </Link>
  );
}
