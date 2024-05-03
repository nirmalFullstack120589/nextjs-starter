/* eslint-disable no-unused-vars */
 // @ts-nocheck

"use client";
import {  usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client, parseBooleanEnvVar } from "@repo/utils/index";
import { ContentModuleProvider } from "@last-rev/component-library/dist/components/ContentModule/ContentModuleContext";
import ContentModule from "@last-rev/component-library/dist/components/ContentModule/ContentModule";
import {contentMapping} from "@repo/ui/contentMapping";
import { join } from "path";

const preview = parseBooleanEnvVar(process.env.CONTENTFUL_USE_PREVIEW);
const site = process.env.SITE;
console.log({preview, site});

// const pagesRevalidate = parseInt(process.env.PAGES_REVALIDATE as string, 10);
// const revalidate = !isNaN(pagesRevalidate) ? pagesRevalidate : false;

export default function Page() {
  const pathName = usePathname();
  const [data, setData] = useState<any>(null);
  
  const [ _, setError] = useState<any>(null);

  useEffect(() => {
    console.log("effect call");
    fetchData();
  }, [pathName]); // Ensure re-fetching when slug changes

  const fetchData = async () => {
    
    try {
      console.log('faetchData...');
      // const path = join("/", ((pathName as string[]) || ["/"]).join("/"));
     
      const { data: fetchedData } = await client.Page({
        path:pathName,
        locale: "en-US",
        preview:true,
        site:'ANSWER-AI-MARKETING',
      });
      if (!fetchedData?.page) {
        throw new Error("Page not found");
      }
      console.log({fetchedData});
      
      setData(fetchedData);
    } catch (err) {
      console.log('errr', err);
      
      if (err instanceof Error) {
        setError(err);
      }
    }
  };
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ContentModuleProvider contentMapping={contentMapping}>
      <ContentModule {...data.page} />
    </ContentModuleProvider>
  );
}
