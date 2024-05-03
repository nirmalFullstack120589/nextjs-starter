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

export default function Page() {
  const pathName = usePathname();
  const [data, setData] = useState<any>(null);
  
  const [ _, setError] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, [pathName]); 

  const fetchData = async () => {
    
    try {
      const { data: fetchedData } = await client.Page({
        path:pathName,
        locale: "en-US",
        preview:true,
        site:'ANSWER-AI-MARKETING',
      });
      if (!fetchedData?.page) {
        throw new Error("Page not found");
      }
      
      setData(fetchedData);
    } catch (err) {
      
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
