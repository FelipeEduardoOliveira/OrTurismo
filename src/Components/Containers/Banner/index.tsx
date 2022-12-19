import React from "react";
import { ContainerBanner } from "./styled";
export const Banner = ({children}:any) => {
  return(
<ContainerBanner>
    {children}
</ContainerBanner>
  );
};
