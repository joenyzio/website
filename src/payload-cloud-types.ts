/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    teams: Team;
    projects: Project;
    deployments: Deployment;
    plans: Plan;
    templates: Template;
    'atlas-projects': AtlasProject;
    'atlas-orgs': AtlasOrg;
    jobs: Job;
    'teardown-errors': TeardownError;
  };
  globals: {};
}
export interface User {
  id: string;
  name?: string;
  githubID?: string;
  createTeamFromSlug?: string;
  createTeamFromName?: string;
  teams?: {
    team?: string | Team;
    roles?: ('owner' | 'admin' | 'user')[];
    invitedOn?: string;
    acceptedOn?: string;
    id?: string;
  }[];
  roles?: ('admin' | 'user')[];
  githubAccessToken?: string;
  githubAccessTokenExpiration?: number;
  githubRefreshToken?: string;
  githubRefreshTokenExpiration?: number;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  _verified?: boolean;
  _verificationToken?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Team {
  id: string;
  name: string;
  slug: string;
  invitations?: {
    user?: string | User;
    email?: string;
    roles?: ('owner' | 'admin' | 'user')[];
    invitedOn?: string;
    id?: string;
  }[];
  sendEmailInvitationsTo?: {
    user?: string | User;
    email?: string;
    roles?: ('owner' | 'admin' | 'user')[];
    id?: string;
  }[];
  billingEmail: string;
  stripeCustomerID?: string;
  skipSync?: boolean;
  createdBy?: string | User;
  createdAt: string;
  updatedAt: string;
}
export interface Project {
  id: string;
  slug: string;
  status?: 'draft' | 'published';
  skipSync?: boolean;
  name: string;
  plan?: string | Plan;
  team: string | Team;
  region?: 'us-east' | 'us-west' | 'eu-west';
  template?: string | Template;
  makePrivate?: boolean;
  digitalOceanAppID?: string;
  source?: 'github';
  repositoryName?: string;
  repositoryID?: string;
  installID?: string;
  deploymentBranch?: string;
  outputDirectory?: string;
  buildScript?: string;
  installScript?: string;
  runScript?: string;
  rootDirectory?: string;
  cloudflareDNSRecordID?: string;
  defaultDomain?: string;
  domains?: {
    domain: string;
    cloudflareID?: string;
    id?: string;
  }[];
  atlasProjectID?: string;
  atlasConnectionString?: string;
  atlasDatabaseName?: string;
  atlasDatabaseType?: 'cluster' | 'serverless';
  atlasDatabaseUser?: string;
  atlasDatabasePassword?: string;
  s3Policy?: 'public' | 'private';
  cognitoIdentityID?: string;
  cognitoPassword?: string;
  PAYLOAD_SECRET?: string;
  environmentVariables?: {
    key?: string;
    value?: string;
    id?: string;
  }[];
  stripeSubscriptionID?: string;
  stripeSubscriptionStatus?:
    | 'active'
    | 'canceled'
    | 'incomplete'
    | 'incomplete_expired'
    | 'past_due'
    | 'trialing'
    | 'unpaid'
    | 'paused';
  resendAPIKey?: string;
  defaultDomainResendDNSRecords?: {
    cloudflareID: string;
    type: 'MX' | 'TXT' | 'CNAME';
    name: string;
    value: string;
    id?: string;
  }[];
  teamProjectName?: string;
  createdAt: string;
  updatedAt: string;
}
export interface Plan {
  id: string;
  name: string;
  slug: string;
  stripeProductID?: string;
  priceJSON?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  order?: number;
  createdAt: string;
  updatedAt: string;
}
export interface Template {
  id: string;
  name?: string;
  slug?: string;
  description?: string;
  templateOwner: string;
  templateRepo: string;
  order?: number;
  files?: {
    path: string;
    content?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
export interface Deployment {
  id: string;
  project: string | Project;
  deploymentID: string;
  commitSha?: string;
  commitMessage?: string;
  lastSync?: string;
  deploymentStatus?:
    | 'UNKNOWN'
    | 'PENDING_BUILD'
    | 'BUILDING'
    | 'PENDING_DEPLOY'
    | 'DEPLOYING'
    | 'ACTIVE'
    | 'SUPERSEDED'
    | 'ERROR'
    | 'CANCELED';
  createdAt: string;
  updatedAt: string;
}
export interface AtlasProject {
  id: string;
  atlasProjectID?: string;
  projects?: string[] | Project[];
  projectCount?: number;
  createdAt: string;
  updatedAt: string;
}
export interface AtlasOrg {
  id: string;
  atlasOrgID?: string;
  atlasProjects?: string[] | AtlasProject[];
  projectCount?: number;
  createdAt: string;
  updatedAt: string;
}
export interface Job {
  id: string;
  type: 'deployApp' | 'provisionDNS';
  processing?: boolean;
  seenByWorker?: boolean;
  deployApp?: {
    project: string | Project;
  };
  provisionDNS?: {
    project: string | Project;
  };
  hasError?: boolean;
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  createdAt: string;
  updatedAt: string;
}
export interface TeardownError {
  id: string;
  project?: {
    name: string;
    teamName?: string;
    teamID: string;
  };
  serviceErrors?: {
    service?: string;
    error?: string;
    id?: string;
  }[];
  createdAt: string;
  updatedAt: string;
}
