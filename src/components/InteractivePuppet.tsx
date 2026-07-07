import PuppetPart from "./Puppet/PuppetPart";
import { NestedPuppetPart } from "./Puppet/PuppetPart";

const base = import.meta.env.BASE_URL;

const InteractivePuppet = () => {
  return (
    <div className="absolute z-[2]">
      <PuppetPart
        src={`${base}imgPuppet/head.webp`}
        top={31}
        left={-44}
        width={129}
        height={134}
        angle={0}
        origin="48px 49px"
        showOriginDot={true}
        OriginDotSmall={true}
        wiggle={true}
      />

      <PuppetPart
        src={`${base}imgPuppet/legL.webp`}
        top={454}
        left={1237}
        width={290}
        height={194}
        angle={0}
        origin="262px 38px"
        showOriginDot={true}
        OriginDotSmall={true}
        wiggle={true}
      />

      <NestedPuppetPart
        src={`${base}imgPuppet/handL2G.webp`}
        top={1620}
        left={2543}
        width={1099}
        height={601}
        angle={0}
        origin="136px 131px"
        showOriginDot={true}
        wiggle={true}
      >
        <PuppetPart
          src={`${base}imgPuppet/handL1.webp`}
          top={331}
          left={288}
          width={811}
          height={270}
          angle={0}
          origin="87px 175px"
          showOriginDot={true}
          wiggle={true}
        />
      </NestedPuppetPart>

      <NestedPuppetPart
        src={`${base}imgPuppet/handR2G.png`}
        top={2305}
        left={-19}
        width={225.5}
        height={287.5}
        angle={0}
        origin="31px 257px"
        showOriginDot={true}
        wiggle={true}
        OriginDotSmall={true}
      >
        <PuppetPart
          src={`${base}imgPuppet/handR1.webp`}
          top={0}
          left={117.5}
          width={108}
          height={222}
          angle={0}
          origin="29px 193.5px"
          showOriginDot={true}
          wiggle={true}
          OriginDotSmall={true}
        />
      </NestedPuppetPart>

      <PuppetPart
        src={`${base}imgPuppet/legR.webp`}
        top={850}
        left={1904}
        width={761}
        height={1119}
        angle={0}
        origin="654px 90px"
        showOriginDot={true}
        wiggle={true}
      />
    </div>
  );
};

export default InteractivePuppet;
