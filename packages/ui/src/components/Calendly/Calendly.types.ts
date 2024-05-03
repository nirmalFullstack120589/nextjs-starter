import { ModuleIntegration_BaseFragmentFragment } from '@repo/graphql-sdk';

export interface CalendlyProps extends ModuleIntegration_BaseFragmentFragment {}

export interface CalendlyClasses {
  root: string;
}

export declare type CalendlyClassKey = keyof CalendlyClasses;
