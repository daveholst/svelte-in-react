import React, { useEffect, useRef } from "react";
import SvelteComponent from "../svelte/SvelteComponent.svelte";

interface WrapperProps {
  animal: string;
}

export const SvelteWrapper: React.FC<WrapperProps> = ({ animal }) => {
  const divRef = useRef<HTMLDivElement>(null);
  console.log("SvelteWrapper Fired");

  useEffect(() => {
    console.log("useEffect Fired");

    const component = new SvelteComponent({
      props: {
        animal,
      },
      target: divRef.current as Element,
    });

    return () => {
      component.$destroy;
    };
  }, [divRef]);

  return <div ref={divRef}></div>;
};
