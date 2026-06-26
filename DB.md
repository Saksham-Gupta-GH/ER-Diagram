# Detailed Database Schema

This document lists all tables along with every property of their attributes (Primary Keys, Foreign Keys, Defaults, Lengths, etc.).

### **crm.crm_audit_logs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | YES | - |  |
| `action` | `character varying(100)` | NO | - |  |
| `entityType` | `character varying(80)` | NO | - |  |
| `entityId` | `character varying(120)` | YES | - |  |
| `entityName` | `character varying(240)` | YES | - |  |
| `actorUserId` | `integer` | YES | - |  |
| `actorName` | `character varying(150)` | YES | - |  |
| `actorEmail` | `character varying(320)` | YES | - |  |
| `outcome` | `character varying(30)` | NO | `'success'::character varying` |  |
| `ipAddress` | `character varying(80)` | YES | - |  |
| `userAgent` | `text` | YES | - |  |
| `requestId` | `character varying(120)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_automation_enrollment_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `workflowId` | `uuid` | NO | - | FK -> `crm_automation_workflows(id)` |
| `selection` | `jsonb` | NO | `'{}'::jsonb` |  |
| `source` | `character varying(80)` | NO | `'manual_enroll'::character varying` |  |
| `status` | `character varying(40)` | NO | `'queued'::character varying` |  |
| `totalTargeted` | `integer` | YES | - |  |
| `enrolledCount` | `integer` | NO | `0` |  |
| `succeededCount` | `integer` | NO | `0` |  |
| `stoppedCount` | `integer` | NO | `0` |  |
| `failedCount` | `integer` | NO | `0` |  |
| `lastContactId` | `uuid` | YES | - |  |
| `errors` | `jsonb` | NO | `'[]'::jsonb` |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_automation_runs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `workflowId` | `uuid` | NO | - | FK -> `crm_automation_workflows(id)` |
| `locationId` | `integer` | NO | - |  |
| `contactId` | `uuid` | YES | - | FK -> `crm_contacts(id)` |
| `runType` | `character varying(40)` | NO | `'test'::character varying` |  |
| `status` | `character varying(40)` | NO | `'success'::character varying` |  |
| `triggerKey` | `character varying(120)` | YES | - |  |
| `currentNodeId` | `character varying(120)` | YES | - |  |
| `input` | `jsonb` | NO | `'{}'::jsonb` |  |
| `result` | `jsonb` | NO | `'{}'::jsonb` |  |
| `error` | `text` | YES | - |  |
| `startedAt` | `timestamp with time zone` | NO | `now()` |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_automation_workflows**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(180)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `status` | `character varying(40)` | NO | `'draft'::character varying` |  |
| `triggerKey` | `character varying(120)` | NO | - |  |
| `triggerLabel` | `character varying(180)` | NO | - |  |
| `nodes` | `jsonb` | NO | `'[]'::jsonb` |  |
| `settings` | `jsonb` | NO | `'{}'::jsonb` |  |
| `stats` | `jsonb` | NO | `'{}'::jsonb` |  |
| `publishedAt` | `timestamp with time zone` | YES | - |  |
| `lastTestedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_bulk_action_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `action` | `character varying(60)` | NO | - |  |
| `selection` | `jsonb` | NO | `'{}'::jsonb` |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `status` | `character varying(40)` | NO | `'queued'::character varying` |  |
| `totalTargeted` | `integer` | YES | - |  |
| `processedCount` | `integer` | NO | `0` |  |
| `affectedCount` | `integer` | NO | `0` |  |
| `failedCount` | `integer` | NO | `0` |  |
| `errors` | `jsonb` | NO | `'[]'::jsonb` |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_export_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `selection` | `jsonb` | NO | `'{}'::jsonb` |  |
| `status` | `character varying(40)` | NO | `'queued'::character varying` |  |
| `totalRows` | `integer` | YES | - |  |
| `exportedRows` | `integer` | NO | `0` |  |
| `fileName` | `character varying(240)` | YES | - |  |
| `filePath` | `text` | YES | - |  |
| `storageType` | `character varying(40)` | NO | `'local'::character varying` |  |
| `storageBucket` | `character varying(240)` | YES | - |  |
| `storageKey` | `text` | YES | - |  |
| `downloadUrl` | `text` | YES | - |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_fields**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `key` | `character varying(80)` | NO | - |  |
| `label` | `character varying(160)` | NO | - |  |
| `fieldType` | `character varying(40)` | NO | `'text'::character varying` |  |
| `options` | `jsonb` | NO | `'[]'::jsonb` |  |
| `showInTable` | `boolean` | NO | `false` |  |
| `sortOrder` | `integer` | NO | `0` |  |
| `isSystem` | `boolean` | NO | `false` |  |
| `archivedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_filter_counts**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `scopeHash` | `character varying(64)` | NO | - |  |
| `scope` | `jsonb` | NO | `'{}'::jsonb` |  |
| `status` | `character varying(40)` | NO | `'pending'::character varying` |  |
| `total` | `integer` | YES | - |  |
| `calculatedAt` | `timestamp with time zone` | YES | - |  |
| `invalidatedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_identities**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `contactId` | `uuid` | NO | - | FK -> `crm_contacts(id)` |
| `locationId` | `integer` | NO | - |  |
| `provider` | `character varying(40)` | NO | `'movira'::character varying` |  |
| `externalType` | `character varying(80)` | NO | - |  |
| `externalId` | `character varying(160)` | NO | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_import_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `sourceType` | `character varying(40)` | NO | `'csv'::character varying` |  |
| `fileName` | `character varying(240)` | YES | - |  |
| `status` | `character varying(40)` | NO | `'completed'::character varying` |  |
| `totalRows` | `integer` | NO | `0` |  |
| `createdCount` | `integer` | NO | `0` |  |
| `updatedCount` | `integer` | NO | `0` |  |
| `skippedCount` | `integer` | NO | `0` |  |
| `errorCount` | `integer` | NO | `0` |  |
| `fieldMapping` | `jsonb` | NO | `'{}'::jsonb` |  |
| `errors` | `jsonb` | NO | `'[]'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |

### **crm.crm_contact_notes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `contactId` | `uuid` | NO | - | FK -> `crm_contacts(id)` |
| `locationId` | `integer` | NO | - |  |
| `body` | `text` | NO | - |  |
| `authorName` | `character varying(160)` | YES | - |  |
| `authorId` | `character varying(120)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contact_tags**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(80)` | NO | - |  |
| `normalizedName` | `character varying(80)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `color` | `character varying(20)` | YES | - |  |
| `createdBy` | `character varying(120)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_contacts**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `fullName` | `character varying(240)` | YES | - |  |
| `firstName` | `character varying(120)` | YES | - |  |
| `lastName` | `character varying(120)` | YES | - |  |
| `email` | `character varying(320)` | YES | - |  |
| `normalizedEmail` | `character varying(320)` | YES | - |  |
| `phone` | `character varying(60)` | YES | - |  |
| `normalizedPhone` | `character varying(60)` | YES | - |  |
| `sourceType` | `character varying(40)` | NO | `'manual'::character varying` |  |
| `sourceRefType` | `character varying(80)` | YES | - |  |
| `sourceRefId` | `character varying(120)` | YES | - |  |
| `lifecycle` | `character varying(40)` | NO | `'lead'::character varying` |  |
| `marketingStatus` | `character varying(40)` | NO | `'subscribed'::character varying` |  |
| `smsStatus` | `character varying(40)` | NO | `'unknown'::character varying` |  |
| `doNotContact` | `boolean` | NO | `false` |  |
| `tags` | `jsonb` | NO | `'[]'::jsonb` |  |
| `customFields` | `jsonb` | NO | `'{}'::jsonb` |  |
| `sourceSnapshot` | `jsonb` | NO | `'{}'::jsonb` |  |
| `lastEngagedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_email_domain_routes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `routeKey` | `character varying(80)` | NO | - |  |
| `label` | `character varying(150)` | NO | - |  |
| `domainId` | `uuid` | YES | - | FK -> `crm_email_domains(id)` |
| `trafficPercent` | `integer` | NO | `100` |  |
| `frequencyPolicy` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_email_domains**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `domain` | `character varying(255)` | NO | - |  |
| `domainType` | `character varying(30)` | NO | `'subdomain'::character varying` |  |
| `useCase` | `character varying(30)` | NO | `'marketing'::character varying` |  |
| `provider` | `character varying(50)` | NO | `'movira_ses'::character varying` |  |
| `status` | `character varying(30)` | NO | `'pending'::character varying` |  |
| `dnsRecords` | `jsonb` | NO | `'[]'::jsonb` |  |
| `verifiedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `senderName` | `character varying(150)` | YES | - |  |
| `senderEmail` | `character varying(255)` | YES | - |  |
| `warmupStage` | `integer` | NO | `1` |  |
| `warmupTodaySent` | `integer` | NO | `0` |  |
| `warmupTodayLimit` | `integer` | NO | `50` |  |
| `isDefault` | `boolean` | NO | `false` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `providerIdentityName` | `character varying(255)` | YES | - |  |
| `providerIdentityArn` | `character varying(500)` | YES | - |  |
| `mailFromDomain` | `character varying(255)` | YES | - |  |
| `lastDnsCheckedAt` | `timestamp with time zone` | YES | - |  |
| `lastVerificationError` | `text` | YES | - |  |
| `providerConfigId` | `uuid` | YES | - | FK -> `crm_provider_configs(id)` |

### **crm.crm_email_reply_forward_settings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `forwardingAddresses` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `bccEmails` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `replyAddresses` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `forwardToAssignedUser` | `boolean` | NO | `false` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_event_template_bindings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `eventType` | `character varying(120)` | NO | - |  |
| `channel` | `character varying(20)` | NO | `'email'::character varying` |  |
| `locationId` | `integer` | YES | - |  |
| `templateKey` | `character varying(150)` | NO | - |  |
| `priority` | `character varying(20)` | NO | `'normal'::character varying` |  |
| `variableMap` | `jsonb` | NO | `'{}'::jsonb` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `notes` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_assets**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `folderId` | `uuid` | YES | - | FK -> `crm_marketing_folders(id)` |
| `name` | `character varying(200)` | NO | - |  |
| `assetType` | `character varying(40)` | NO | `'image'::character varying` |  |
| `url` | `text` | NO | - |  |
| `thumbnailUrl` | `text` | YES | - |  |
| `altText` | `character varying(300)` | YES | - |  |
| `tags` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `width` | `integer` | YES | - |  |
| `height` | `integer` | YES | - |  |
| `mimeType` | `character varying(100)` | YES | - |  |
| `sizeBytes` | `integer` | YES | - |  |
| `source` | `character varying(40)` | NO | `'url'::character varying` |  |
| `createdByUserId` | `integer` | YES | - |  |
| `createdByName` | `character varying(150)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_calendar_overrides**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `planId` | `uuid` | NO | - | FK -> `crm_marketing_calendar_plans(id)` |
| `title` | `character varying(240)` | NO | - |  |
| `overrideType` | `character varying(40)` | NO | `'special_event'::character varying` |  |
| `startDate` | `date` | NO | - |  |
| `endDate` | `date` | NO | - |  |
| `priority` | `integer` | NO | `100` |  |
| `color` | `character varying(40)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'planned'::character varying` |  |
| `config` | `jsonb` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_calendar_plans**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `planType` | `character varying(40)` | NO | `'campaign'::character varying` |  |
| `status` | `character varying(20)` | NO | `'draft'::character varying` |  |
| `startDate` | `date` | NO | - |  |
| `endDate` | `date` | NO | - |  |
| `color` | `character varying(40)` | YES | - |  |
| `visibility` | `character varying(20)` | NO | `'internal'::character varying` |  |
| `linkedCrmCampaignId` | `uuid` | YES | - |  |
| `metadata` | `jsonb` | YES | - |  |
| `createdByUserId` | `integer` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_calendar_rules**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `planId` | `uuid` | NO | - | FK -> `crm_marketing_calendar_plans(id)` |
| `ruleType` | `character varying(40)` | NO | `'marketing'::character varying` |  |
| `sourceSystem` | `character varying(40)` | NO | `'crm'::character varying` |  |
| `linkedEntityType` | `character varying(80)` | YES | - |  |
| `linkedEntityId` | `character varying(120)` | YES | - |  |
| `title` | `character varying(240)` | NO | - |  |
| `startDate` | `date` | YES | - |  |
| `endDate` | `date` | YES | - |  |
| `status` | `character varying(20)` | NO | `'planned'::character varying` |  |
| `config` | `jsonb` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_campaign_audience_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `campaignId` | `uuid` | NO | - | FK -> `crm_marketing_campaigns(id)` |
| `templateId` | `uuid` | NO | - | FK -> `crm_marketing_templates(id)` |
| `audience` | `jsonb` | NO | `'{}'::jsonb` |  |
| `sendOptions` | `jsonb` | NO | `'{}'::jsonb` |  |
| `status` | `character varying(40)` | NO | `'queued'::character varying` |  |
| `totalTargeted` | `integer` | YES | - |  |
| `processedCount` | `integer` | NO | `0` |  |
| `queuedCount` | `integer` | NO | `0` |  |
| `suppressedCount` | `integer` | NO | `0` |  |
| `duplicateCount` | `integer` | NO | `0` |  |
| `ineligibleCount` | `integer` | NO | `0` |  |
| `failedCount` | `integer` | NO | `0` |  |
| `lastContactId` | `uuid` | YES | - |  |
| `errors` | `jsonb` | NO | `'[]'::jsonb` |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_campaigns**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `folderId` | `uuid` | YES | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `channel` | `character varying(20)` | NO | `'email'::character varying` |  |
| `campaignType` | `character varying(40)` | NO | `'email_campaign'::character varying` |  |
| `templateId` | `uuid` | YES | - |  |
| `status` | `character varying(20)` | NO | `'draft'::character varying` |  |
| `scheduledAt` | `timestamp with time zone` | YES | - |  |
| `executionDate` | `timestamp with time zone` | YES | - |  |
| `totalRecipients` | `integer` | NO | `0` |  |
| `totalDelivered` | `integer` | NO | `0` |  |
| `totalOpened` | `integer` | NO | `0` |  |
| `totalClicked` | `integer` | NO | `0` |  |
| `totalBounced` | `integer` | NO | `0` |  |
| `totalUnsubscribed` | `integer` | NO | `0` |  |
| `totalComplained` | `integer` | NO | `0` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_delivery_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `messageId` | `uuid` | NO | - | FK -> `crm_marketing_messages(id)` |
| `campaignId` | `uuid` | YES | - | FK -> `crm_marketing_campaigns(id)` |
| `provider` | `character varying(60)` | YES | - |  |
| `providerMessageId` | `character varying(255)` | YES | - |  |
| `eventType` | `character varying(60)` | NO | - |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `occurredAt` | `timestamp with time zone` | NO | `now()` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_folders**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `parentId` | `uuid` | YES | - |  |
| `kind` | `character varying(20)` | NO | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_messages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `campaignId` | `uuid` | YES | - | FK -> `crm_marketing_campaigns(id)` |
| `templateId` | `uuid` | YES | - | FK -> `crm_marketing_templates(id)` |
| `channel` | `character varying(20)` | NO | `'email'::character varying` |  |
| `recipient` | `character varying(320)` | NO | - |  |
| `subject` | `character varying(500)` | YES | - |  |
| `status` | `character varying(30)` | NO | `'pending'::character varying` |  |
| `provider` | `character varying(60)` | YES | - |  |
| `providerMessageId` | `character varying(255)` | YES | - |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `queuedAt` | `timestamp with time zone` | YES | - |  |
| `sentAt` | `timestamp with time zone` | YES | - |  |
| `deliveredAt` | `timestamp with time zone` | YES | - |  |
| `openedAt` | `timestamp with time zone` | YES | - |  |
| `clickedAt` | `timestamp with time zone` | YES | - |  |
| `bouncedAt` | `timestamp with time zone` | YES | - |  |
| `complainedAt` | `timestamp with time zone` | YES | - |  |
| `unsubscribedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_snippets**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `snippetType` | `character varying(20)` | NO | - |  |
| `category` | `character varying(60)` | NO | `'custom'::character varying` |  |
| `tags` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `previewText` | `character varying(300)` | YES | - |  |
| `designJson` | `jsonb` | NO | - |  |
| `createdByUserId` | `integer` | YES | - |  |
| `createdByName` | `character varying(150)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_suppressions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `email` | `character varying(320)` | NO | - |  |
| `reason` | `character varying(40)` | NO | - |  |
| `source` | `character varying(80)` | NO | `'manual'::character varying` |  |
| `scope` | `character varying(30)` | NO | `'marketing'::character varying` |  |
| `campaignId` | `uuid` | YES | - | FK -> `crm_marketing_campaigns(id)` |
| `messageId` | `uuid` | YES | - | FK -> `crm_marketing_messages(id)` |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `active` | `boolean` | NO | `true` |  |
| `suppressedAt` | `timestamp with time zone` | NO | `now()` |  |
| `releasedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_template_revisions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `templateId` | `uuid` | NO | - | FK -> `crm_marketing_templates(id)` |
| `locationId` | `integer` | NO | - |  |
| `revisionNumber` | `integer` | NO | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `editorType` | `character varying(20)` | NO | - |  |
| `useCase` | `character varying(20)` | NO | - |  |
| `htmlBody` | `text` | YES | - |  |
| `designJson` | `jsonb` | YES | - |  |
| `plainText` | `text` | YES | - |  |
| `updatedByUserId` | `integer` | YES | - |  |
| `updatedByName` | `character varying(150)` | YES | - |  |
| `reason` | `character varying(80)` | NO | `'save'::character varying` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_marketing_templates**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `folderId` | `uuid` | YES | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `editorType` | `character varying(20)` | NO | `'design'::character varying` |  |
| `htmlBody` | `text` | YES | - |  |
| `designJson` | `jsonb` | YES | - |  |
| `plainText` | `text` | YES | - |  |
| `updatedByUserId` | `integer` | YES | - |  |
| `updatedByName` | `character varying(150)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `useCase` | `character varying(20)` | NO | `'marketing'::character varying` |  |

### **crm.crm_marketing_worker_heartbeats**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `workerType` | `character varying(60)` | NO | - |  |
| `workerId` | `character varying(160)` | NO | - |  |
| `queueType` | `character varying(40)` | YES | - |  |
| `status` | `character varying(30)` | NO | `'starting'::character varying` |  |
| `lastStartedAt` | `timestamp with time zone` | YES | - |  |
| `lastHeartbeatAt` | `timestamp with time zone` | YES | - |  |
| `lastPollAt` | `timestamp with time zone` | YES | - |  |
| `lastProcessedAt` | `timestamp with time zone` | YES | - |  |
| `lastErrorAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `totalProcessed` | `integer` | NO | `0` |  |
| `totalFailed` | `integer` | NO | `0` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_provider_configs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | YES | - |  |
| `domain` | `character varying(30)` | NO | `'marketing'::character varying` |  |
| `channel` | `character varying(20)` | NO | `'email'::character varying` |  |
| `provider` | `character varying(50)` | NO | - |  |
| `displayName` | `character varying(150)` | NO | - |  |
| `priority` | `integer` | NO | `100` |  |
| `isDefault` | `boolean` | NO | `false` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `encryptedConfig` | `jsonb` | NO | `'{}'::jsonb` |  |
| `verifiedAt` | `timestamp with time zone` | YES | - |  |
| `lastTestedAt` | `timestamp with time zone` | YES | - |  |
| `lastTestError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_queue_jobs**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | YES | - |  |
| `queueName` | `character varying(60)` | NO | `'general'::character varying` |  |
| `jobType` | `character varying(80)` | NO | - |  |
| `status` | `character varying(40)` | NO | `'pending'::character varying` |  |
| `priority` | `integer` | NO | `50` |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `result` | `jsonb` | NO | `'{}'::jsonb` |  |
| `attempts` | `integer` | NO | `0` |  |
| `maxAttempts` | `integer` | NO | `3` |  |
| `runAt` | `timestamp with time zone` | NO | `now()` |  |
| `lockedAt` | `timestamp with time zone` | YES | - |  |
| `lockedBy` | `character varying(160)` | YES | - |  |
| `startedAt` | `timestamp with time zone` | YES | - |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_segment_members**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `segmentId` | `uuid` | NO | - | FK -> `crm_segments(id)` |
| `contactId` | `uuid` | NO | - | FK -> `crm_contacts(id)` |
| `locationId` | `integer` | NO | - |  |
| `source` | `character varying(40)` | NO | `'filter'::character varying` |  |
| `status` | `character varying(40)` | NO | `'active'::character varying` |  |
| `enteredAt` | `timestamp with time zone` | NO | `now()` |  |
| `exitedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_segments**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(180)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `segmentType` | `character varying(40)` | NO | `'dynamic'::character varying` |  |
| `status` | `character varying(40)` | NO | `'active'::character varying` |  |
| `filters` | `jsonb` | NO | `'{}'::jsonb` |  |
| `memberCount` | `integer` | NO | `0` |  |
| `lastCalculatedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_sender_warmup_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `warmupProfileId` | `uuid` | NO | - | FK -> `crm_sender_warmup_profiles(id)` |
| `domainId` | `uuid` | NO | - | FK -> `crm_email_domains(id)` |
| `eventType` | `character varying(40)` | NO | - |  |
| `fromStage` | `integer` | YES | - |  |
| `toStage` | `integer` | YES | - |  |
| `reason` | `text` | YES | - |  |
| `metricsSnapshot` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_sender_warmup_profiles**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `domainId` | `uuid` | NO | - | FK -> `crm_email_domains(id)` |
| `provider` | `character varying(50)` | NO | - |  |
| `providerConfigId` | `uuid` | YES | - | FK -> `crm_provider_configs(id)` |
| `status` | `character varying(30)` | NO | `'active'::character varying` |  |
| `stage` | `integer` | NO | `1` |  |
| `dailyLimit` | `integer` | NO | `50` |  |
| `hourlyLimit` | `integer` | NO | `10` |  |
| `todaySent` | `integer` | NO | `0` |  |
| `currentHourSent` | `integer` | NO | `0` |  |
| `todayDelivered` | `integer` | NO | `0` |  |
| `todayBounced` | `integer` | NO | `0` |  |
| `todayComplaints` | `integer` | NO | `0` |  |
| `todayUnsubscribed` | `integer` | NO | `0` |  |
| `todayOpened` | `integer` | NO | `0` |  |
| `todayClicked` | `integer` | NO | `0` |  |
| `windowStartedAt` | `date` | NO | `CURRENT_DATE` |  |
| `hourWindowStartedAt` | `timestamp with time zone` | NO | `now()` |  |
| `startedAt` | `timestamp with time zone` | NO | `now()` |  |
| `completedAt` | `timestamp with time zone` | YES | - |  |
| `lastEvaluatedAt` | `timestamp with time zone` | YES | - |  |
| `pausedAt` | `timestamp with time zone` | YES | - |  |
| `pausedReason` | `text` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_transactional_delivery_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `messageId` | `uuid` | NO | - | FK -> `crm_transactional_messages(id)` |
| `provider` | `character varying(60)` | YES | - |  |
| `providerMessageId` | `character varying(255)` | YES | - |  |
| `eventType` | `character varying(60)` | NO | - |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `occurredAt` | `timestamp with time zone` | NO | `now()` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **crm.crm_transactional_messages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `sourceSystem` | `character varying(80)` | NO | `'aeroSportsAdmin'::character varying` |  |
| `sourceEventType` | `character varying(120)` | NO | - |  |
| `sourceResourceType` | `character varying(80)` | YES | - |  |
| `sourceResourceId` | `character varying(120)` | YES | - |  |
| `channel` | `character varying(20)` | NO | - |  |
| `recipientAddress` | `character varying(255)` | NO | - |  |
| `templateKey` | `character varying(150)` | NO | - |  |
| `templateVersionId` | `uuid` | YES | - |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `priority` | `character varying(20)` | NO | `'normal'::character varying` |  |
| `status` | `character varying(30)` | NO | `'pending'::character varying` |  |
| `idempotencyKey` | `character varying(255)` | NO | - |  |
| `provider` | `character varying(60)` | YES | - |  |
| `providerMessageId` | `character varying(255)` | YES | - |  |
| `queuedAt` | `timestamp with time zone` | YES | - |  |
| `sentAt` | `timestamp with time zone` | YES | - |  |
| `deliveredAt` | `timestamp with time zone` | YES | - |  |
| `failedAt` | `timestamp with time zone` | YES | - |  |
| `lastError` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `attachments` | `jsonb` | NO | `'[]'::jsonb` |  |

### **crm.crm_transactional_templates**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | YES | - |  |
| `key` | `character varying(150)` | NO | - |  |
| `channel` | `character varying(20)` | NO | `'email'::character varying` |  |
| `name` | `character varying(180)` | NO | - |  |
| `category` | `character varying(80)` | NO | `'booking'::character varying` |  |
| `subject` | `character varying(500)` | YES | - |  |
| `body` | `text` | NO | - |  |
| `config` | `jsonb` | NO | `'{}'::jsonb` |  |
| `variables` | `jsonb` | NO | `'[]'::jsonb` |  |
| `isSystem` | `boolean` | NO | `false` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `editorType` | `character varying(20)` | NO | `'code'::character varying` |  |
| `designJson` | `jsonb` | YES | - |  |
| `plainText` | `text` | YES | - |  |
| `updatedByUserId` | `integer` | YES | - |  |
| `updatedByName` | `character varying(150)` | YES | - |  |
| `family` | `character varying(60)` | YES | - |  |
| `description` | `text` | YES | - |  |
| `defaults` | `jsonb` | NO | `'{}'::jsonb` |  |

### **crm.crm_trigger_links**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `uuid` | NO | `gen_random_uuid()` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `name` | `character varying(200)` | NO | - |  |
| `slug` | `character varying(64)` | NO | - |  |
| `destinationUrl` | `character varying(2048)` | NO | - |  |
| `triggerActions` | `jsonb` | NO | `'[]'::jsonb` |  |
| `totalClicks` | `integer` | NO | `0` |  |
| `uniqueClicks` | `integer` | NO | `0` |  |
| `lastClickedAt` | `timestamp with time zone` | YES | - |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **public.ActivityAreaRules**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `activityAreaRuleId` | `integer` | NO | `nextval('"VariationResources_variationResourceId_seq"'::regclass)` | **PK** |
| `variationId` | `integer` | NO | - | FK -> `TicketTypes(variationId)` |
| `areaId` | `integer` | NO | - | FK -> `Areas(areaId)` |
| `startMinute` | `integer` | NO | - |  |
| `endMinute` | `integer` | NO | - |  |
| `maximumGuests` | `integer` | YES | - |  |
| `autoAssign` | `boolean` | NO | `false` |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `bufferMinutes` | `integer` | NO | `0` |  |
| `priority` | `integer` | NO | `0` |  |
| `isRequired` | `boolean` | NO | `true` |  |
| `bookEntireArea` | `boolean` | NO | `false` |  |
| `maxAreasPerBooking` | `integer` | YES | - |  |
| `allowOverflow` | `boolean` | NO | `false` |  |
| `overflowGuests` | `integer` | NO | `0` |  |

### **public.Areas**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `areaId` | `integer` | NO | `nextval('"Resources_resourceId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - |  |
| `areaName` | `character varying(255)` | NO | - |  |
| `capacity` | `integer` | NO | - |  |
| `bookingRule` | `USER-DEFINED` | NO | - |  |
| `productTypeRule` | `USER-DEFINED` | NO | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `turnoverBufferMinutesDefault` | `integer` | NO | `0` |  |
| `bookEntireAreaDefault` | `boolean` | NO | `false` |  |
| `allowMultiAreaAllocation` | `boolean` | NO | `false` |  |
| `maxConcurrentBookings` | `integer` | YES | - |  |
| `isActive` | `boolean` | NO | `true` |  |
| `locationId` | `integer` | YES | - | FK -> `parks(venueId)` |

### **public.BenefitApplications**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `benefitApplicationId` | `bigint` | NO | `nextval('"BenefitApplications_benefitApplicationId_seq"'::regclass)` | **PK** |
| `bookingId` | `integer` | NO | - |  |
| `locationId` | `integer` | NO | - |  |
| `type` | `character varying(32)` | NO | - |  |
| `sourceId` | `integer` | YES | - |  |
| `sourceCode` | `character varying(64)` | YES | - |  |
| `unit` | `character varying(16)` | NO | - |  |
| `amount` | `numeric` | NO | - |  |
| `label` | `character varying(255)` | YES | - |  |
| `actorUserId` | `integer` | YES | - |  |
| `reason` | `character varying(255)` | YES | - |  |
| `metadata` | `jsonb` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalAppearances**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `appearanceId` | `integer` | NO | `nextval('"ProgressiveCheckoutAppearances_appearanceId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `homePageTitle` | `character varying(255)` | YES | - |  |
| `homePageDescription` | `text` | YES | - |  |
| `logoUrl` | `character varying(500)` | YES | - |  |
| `backgroundImageUrl` | `character varying(500)` | YES | - |  |
| `primaryColor` | `character varying(20)` | YES | `'#16a34a'::character varying` |  |
| `buttonStyle` | `character varying(20)` | YES | `'rounded'::character varying` |  |
| `themeTokens` | `jsonb` | YES | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalExtraRules**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `addonRuleId` | `integer` | NO | `nextval('"ProgressiveCheckoutAddonRules_addonRuleId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `productId` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `addonActivityId` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `showOnActivityPage` | `boolean` | YES | `false` |  |
| `showOnAddonPage` | `boolean` | YES | `false` |  |
| `isForced` | `boolean` | YES | `false` |  |
| `sortOrder` | `integer` | YES | `0` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalOptions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `optionsId` | `integer` | NO | `nextval('"ProgressiveCheckoutOptions_optionsId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `enableHomePage` | `boolean` | YES | `true` |  |
| `preselectionMessageEnabled` | `boolean` | YES | `false` |  |
| `preselectionMessage` | `text` | YES | - |  |
| `showCallToBookAfterSalesClose` | `boolean` | YES | `true` |  |
| `callToBookLabel` | `character varying(255)` | YES | `'Call us to book!'::character varying` |  |
| `callToBookPhone` | `character varying(20)` | YES | - |  |
| `addonDisplayMode` | `character varying(20)` | YES | `'dedicated_page'::character varying` |  |
| `waiverCollectionPoint` | `character varying(20)` | YES | `'disabled'::character varying` |  |
| `waiverTemplateId` | `integer` | YES | - |  |
| `holdDurationMinutes` | `integer` | YES | `15` |  |
| `minBookingLeadTimeHours` | `integer` | YES | `0` |  |
| `maxBookingLeadTimeDays` | `integer` | YES | `90` |  |
| `maxGuestsPerBooking` | `integer` | YES | `20` |  |
| `salesCloseMessage` | `text` | YES | - |  |
| `confirmationEmailEnabled` | `boolean` | YES | `true` |  |
| `redirectUrl` | `character varying(500)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `giftCardsEnabled` | `boolean` | NO | `false` |  |

### **public.BookingPortalPublishes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `publishId` | `integer` | NO | `nextval('"ProgressiveCheckoutPublishes_publishId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `configSnapshot` | `jsonb` | NO | - |  |
| `publishedAt` | `timestamp with time zone` | NO | - |  |
| `publishedBy` | `integer` | YES | - |  |
| `version` | `integer` | YES | `1` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalSectionExperiences**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `sectionActivityId` | `integer` | NO | `nextval('"ProgressiveCheckoutSectionActivities_sectionActivityId_seq"'::regclass)` | **PK** |
| `sectionId` | `integer` | NO | - | FK -> `BookingPortalSections(sectionId)` |
| `productId` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `sortOrder` | `integer` | YES | `0` |  |
| `badgeText` | `character varying(50)` | YES | - |  |
| `subtitle` | `character varying(255)` | YES | - |  |
| `imageOverrideUrl` | `character varying(500)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalSections**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `sectionId` | `integer` | NO | `nextval('"ProgressiveCheckoutSections_sectionId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `title` | `character varying(100)` | NO | - |  |
| `sortOrder` | `integer` | YES | `0` |  |
| `isActive` | `boolean` | YES | `true` |  |
| `page` | `character varying(20)` | YES | `'activities'::character varying` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortalVisitorFields**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `guestFieldId` | `integer` | NO | `nextval('"ProgressiveCheckoutGuestFields_guestFieldId_seq"'::regclass)` | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `fieldName` | `character varying(50)` | NO | - |  |
| `visibility` | `character varying(20)` | YES | `'required'::character varying` |  |
| `sortOrder` | `integer` | YES | `0` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.BookingPortals**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `checkoutId` | `integer` | NO | `nextval('"ProgressiveCheckouts_checkoutId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(100)` | NO | - |  |
| `slug` | `character varying(100)` | NO | - |  |
| `status` | `character varying(20)` | YES | `'draft'::character varying` |  |
| `launchMode` | `character varying(20)` | YES | `'full_page'::character varying` |  |
| `entryMode` | `character varying(20)` | YES | `'home_page'::character varying` |  |
| `isDefault` | `boolean` | YES | `false` |  |
| `publishedVersionId` | `integer` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CapacityHolds**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `holdId` | `integer` | NO | `nextval('"CapacityHolds_holdId_seq"'::regclass)` | **PK** |
| `sessionId` | `character varying(100)` | NO | - |  |
| `slotId` | `integer` | NO | - | FK -> `SessionSlots(slotId)` |
| `variationId` | `integer` | NO | - |  |
| `quantity` | `integer` | NO | `1` |  |
| `expiresAt` | `timestamp with time zone` | NO | - |  |
| `status` | `character varying(20)` | YES | `'active'::character varying` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerFlags**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `flagId` | `integer` | NO | `nextval('"CustomerFlags_flagId_seq"'::regclass)` | **PK** |
| `guestId` | `integer` | NO | - |  |
| `kind` | `character varying(40)` | NO | `'general'::character varying` |  |
| `label` | `character varying(120)` | NO | - |  |
| `note` | `text` | YES | - |  |
| `tone` | `character varying(24)` | NO | `'info'::character varying` |  |
| `expiresAt` | `timestamp with time zone` | YES | - |  |
| `createdBy` | `integer` | YES | - |  |
| `resolvedAt` | `timestamp with time zone` | YES | - |  |
| `resolvedBy` | `integer` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerFormFields**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerFormFieldId` | `integer` | NO | `nextval('"CustomerFormFields_customerFormFieldId_seq"'::regclass)` | **PK** |
| `customerFormId` | `integer` | NO | - | FK -> `CustomerForms(customerFormId)` |
| `label` | `character varying(200)` | NO | - |  |
| `fieldType` | `character varying(40)` | NO | `'short_text'::character varying` |  |
| `required` | `boolean` | NO | `false` |  |
| `helpText` | `text` | YES | - |  |
| `options` | `jsonb` | NO | `'[]'::jsonb` |  |
| `sortOrder` | `integer` | NO | `0` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerFormResponses**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerFormResponseId` | `integer` | NO | `nextval('"CustomerFormResponses_customerFormResponseId_seq"'::regclass)` | **PK** |
| `customerFormSubmissionId` | `integer` | NO | - | FK -> `CustomerFormSubmissions(customerFormSubmissionId)` |
| `customerFormFieldId` | `integer` | YES | - | FK -> `CustomerFormFields(customerFormFieldId)` |
| `fieldKey` | `character varying(80)` | NO | - |  |
| `label` | `character varying(200)` | NO | - |  |
| `fieldType` | `character varying(40)` | NO | - |  |
| `value` | `jsonb` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerFormSubmissions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerFormSubmissionId` | `integer` | NO | `nextval('"CustomerFormSubmissions_customerFormSubmissionId_seq"'::regclass)` | **PK** |
| `customerFormId` | `integer` | NO | - | FK -> `CustomerForms(customerFormId)` |
| `guestId` | `integer` | NO | - | FK -> `Visitors(guestId)` |
| `bookingId` | `integer` | YES | - | FK -> `ReservationMasters(bookingMasterId)` |
| `bookingItemId` | `integer` | YES | - | FK -> `Reservations(bookingId)` |
| `membershipId` | `integer` | YES | - | FK -> `Memberships(membershipId)` |
| `activityId` | `integer` | YES | - |  |
| `variationId` | `integer` | YES | - |  |
| `status` | `character varying(20)` | NO | `'completed'::character varying` |  |
| `submittedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `signedByName` | `character varying(200)` | YES | - |  |
| `signatureImage` | `text` | YES | - |  |
| `formSnapshot` | `jsonb` | NO | `'{}'::jsonb` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerForms**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerFormId` | `integer` | NO | `nextval('"CustomerForms_customerFormId_seq"'::regclass)` | **PK** |
| `locationId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(160)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `requireSignature` | `boolean` | NO | `false` |  |
| `settings` | `jsonb` | NO | `'{}'::jsonb` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.CustomerNotes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `noteId` | `integer` | NO | `nextval('"CustomerNotes_noteId_seq"'::regclass)` | **PK** |
| `guestId` | `integer` | NO | - |  |
| `note` | `text` | NO | - |  |
| `visibility` | `character varying(24)` | NO | `'internal'::character varying` |  |
| `createdBy` | `integer` | YES | - |  |
| `deletedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.Entitlements**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `entitlementId` | `integer` | NO | `nextval('"Entitlements_entitlementId_seq"'::regclass)` | **PK** |
| `bookingId` | `integer` | NO | - |  |
| `bookingItemId` | `integer` | YES | - |  |
| `activityId` | `integer` | NO | - |  |
| `variationId` | `integer` | YES | - |  |
| `originalQty` | `integer` | NO | - |  |
| `remainingQty` | `integer` | NO | - |  |
| `status` | `USER-DEFINED` | NO | `'active'::"enum_Entitlements_status"` |  |
| `expiresAt` | `timestamp with time zone` | YES | - |  |
| `redemptionToken` | `character varying(64)` | NO | - |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.ExperienceDetails**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `productDetailsId` | `integer` | NO | `nextval('"ActivityDetails_activityDetailsId_seq"'::regclass)` | **PK** |
| `productId` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `detailedDescription` | `text` | YES | - |  |
| `tags` | `json` | YES | - |  |
| `salesAvailability` | `json` | YES | - |  |
| `additionalDetails` | `json` | YES | - |  |
| `durationMinutes` | `integer` | YES | - |  |
| `Legacyprinters` | `character varying(255)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `requiresWaiver` | `boolean` | NO | `false` |  |

### **public.ExperienceTypes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `typeId` | `integer` | NO | `nextval('"ActivityTypes_typeId_seq"'::regclass)` | **PK** |
| `typeKey` | `character varying(50)` | NO | - |  |
| `displayName` | `character varying(100)` | NO | - |  |

### **public.Experiences**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `productId` | `integer` | NO | `nextval('"Activities_activityId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - |  |
| `productTypeId` | `integer` | NO | - |  |
| `name` | `character varying(100)` | NO | - |  |
| `description` | `text` | YES | - |  |
| `isActive` | `boolean` | YES | `true` |  |
| `imageUrl` | `character varying(255)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `captureTicketHolder` | `boolean` | NO | `false` |  |
| `autoAttachMinors` | `boolean` | NO | `true` |  |

### **public.GiftCardRedemptions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `redemptionId` | `integer` | NO | `nextval('"GiftCardRedemptions_redemptionId_seq"'::regclass)` | **PK** |
| `giftCardId` | `integer` | NO | - |  |
| `bookingId` | `integer` | YES | - |  |
| `amount` | `numeric` | NO | - |  |
| `kind` | `USER-DEFINED` | NO | - |  |
| `balanceAfter` | `numeric` | NO | - |  |
| `actorUserId` | `integer` | YES | - |  |
| `note` | `character varying(255)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.GiftCards**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `giftCardId` | `integer` | NO | `nextval('"GiftCards_giftCardId_seq"'::regclass)` | **PK** |
| `bookingId` | `integer` | NO | - |  |
| `bookingItemId` | `integer` | YES | - |  |
| `activityId` | `integer` | NO | - |  |
| `locationId` | `integer` | NO | - |  |
| `issuedToGuestId` | `integer` | YES | - |  |
| `code` | `character varying(32)` | NO | - |  |
| `pinHash` | `character varying(128)` | YES | - |  |
| `initialBalance` | `numeric` | NO | - |  |
| `currentBalance` | `numeric` | NO | - |  |
| `currency` | `character varying(3)` | NO | `'CAD'::character varying` |  |
| `status` | `USER-DEFINED` | NO | `'active'::"enum_GiftCards_status"` |  |
| `expiresAt` | `timestamp with time zone` | YES | - |  |
| `issuedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.Memberships**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `membershipId` | `integer` | NO | `nextval('"Memberships_membershipId_seq"'::regclass)` | **PK** |
| `bookingId` | `integer` | NO | - |  |
| `bookingItemId` | `integer` | YES | - |  |
| `activityId` | `integer` | NO | - |  |
| `variationId` | `integer` | YES | - |  |
| `guestId` | `integer` | NO | - |  |
| `locationId` | `integer` | NO | - |  |
| `purchasedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `activatedAt` | `timestamp with time zone` | YES | - |  |
| `expiresAt` | `timestamp with time zone` | YES | - |  |
| `autoRenew` | `boolean` | NO | `false` |  |
| `status` | `USER-DEFINED` | NO | `'active'::"enum_Memberships_status"` |  |
| `pausedUntil` | `timestamp with time zone` | YES | - |  |
| `redemptionsToday` | `integer` | NO | `0` |  |
| `redemptionsTodayDate` | `date` | YES | - |  |
| `redemptionToken` | `character varying(64)` | NO | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.OperatingHours**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `operatingHourId` | `integer` | NO | `nextval('"OperatingHours_operatingHourId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `dayOfWeek` | `USER-DEFINED` | NO | - |  |
| `openTime` | `time without time zone` | NO | - |  |
| `closeTime` | `time without time zone` | NO | - |  |
| `isClosed` | `boolean` | YES | `false` |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |

### **public.OrderHistories**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `orderHistoryId` | `integer` | NO | `nextval('"OrderHistories_orderHistoryId_seq"'::regclass)` | **PK** |
| `bookingMasterId` | `integer` | NO | - | FK -> `ReservationMasters(bookingMasterId)` |
| `eventType` | `character varying(255)` | YES | - |  |
| `field` | `character varying(255)` | YES | - |  |
| `from` | `text` | YES | - |  |
| `to` | `text` | YES | - |  |
| `actor` | `character varying(255)` | YES | - |  |
| `remarks` | `text` | YES | - |  |
| `icons` | `character varying(255)` | YES | - |  |
| `changedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.PaymentTransactions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `transactionId` | `integer` | NO | `nextval('"PaymentTransactions_transactionId_seq"'::regclass)` | **PK** |
| `bookingMasterId` | `integer` | YES | - | FK -> `ReservationMasters(bookingMasterId)` |
| `transactionDate` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `amountPaid` | `numeric` | NO | - |  |
| `paymentMethod` | `character varying(100)` | NO | - |  |
| `paymentStatus` | `USER-DEFINED` | NO | `'authorized'::"enum_PaymentTransactions_paymentStatus"` |  |
| `referenceNumber` | `character varying(255)` | YES | - |  |
| `remarks` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `location_id` | `integer` | YES | - |  |
| `source_type` | `character varying(30)` | YES | - |  |
| `source_id` | `integer` | YES | - |  |
| `channel` | `character varying(20)` | YES | - |  |
| `tender_type` | `character varying(20)` | YES | - |  |
| `provider` | `character varying(20)` | YES | - |  |
| `provider_mode` | `character varying(20)` | YES | - |  |
| `provider_transaction_id` | `character varying(255)` | YES | - |  |
| `provider_reference` | `character varying(255)` | YES | - |  |
| `provider_event_id` | `character varying(120)` | YES | - |  |
| `amount` | `numeric` | YES | - |  |
| `currency` | `character varying(3)` | YES | - |  |
| `status` | `character varying(20)` | YES | - |  |
| `idempotency_key` | `character varying(120)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `terminal_id` | `integer` | YES | - |  |
| `cashier_user_id` | `integer` | YES | - |  |
| `tip_amount` | `numeric` | NO | `0` |  |
| `tip_allocation` | `character varying(20)` | YES | - |  |
| `tip_staff_user_id` | `integer` | YES | - |  |
| `tip_recorded_by_user_id` | `integer` | YES | - |  |
| `tip_status` | `character varying(20)` | YES | - |  |
| `tip_distribution_id` | `integer` | YES | - |  |

### **public.PublicBookingPortalSessions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `sessionId` | `character varying(100)` | NO | - | **PK** |
| `checkoutId` | `integer` | NO | - | FK -> `BookingPortals(checkoutId)` |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `expiresAt` | `timestamp with time zone` | NO | - |  |
| `channel` | `character varying(20)` | YES | `'online'::character varying` |  |
| `guestInfo` | `jsonb` | YES | `'{}'::jsonb` |  |
| `cartItems` | `jsonb` | YES | `'[]'::jsonb` |  |
| `pricingSummary` | `jsonb` | YES | `'{}'::jsonb` |  |
| `status` | `character varying(20)` | YES | `'active'::character varying` |  |
| `bookingMasterId` | `integer` | YES | - | FK -> `ReservationMasters(bookingMasterId)` |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.ReservationMasters**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `bookingMasterId` | `integer` | NO | `nextval('"Bookings_bookingId_seq"'::regclass)` | **PK** |
| `guestId` | `integer` | NO | - | FK -> `Visitors(guestId)` |
| `locationId` | `integer` | YES | - | FK -> `parks(venueId)` |
| `activityId` | `integer` | YES | - |  |
| `bookingNumber` | `character varying(255)` | NO | - |  |
| `bookingName` | `character varying(255)` | YES | - |  |
| `dateOfBooking` | `date` | NO | - |  |
| `status` | `USER-DEFINED` | YES | `'pending'::"enum_Bookings_status"` |  |
| `totalAmount` | `numeric` | NO | - |  |
| `balance` | `numeric` | NO | - |  |
| `paymentStatus` | `USER-DEFINED` | YES | `'unpaid'::"enum_Bookings_paymentStatus"` |  |
| `notes` | `text` | YES | - |  |
| `posnotes` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `subtotalAmount` | `numeric` | NO | `'0'::double precision` |  |
| `discountCode` | `character varying(255)` | YES | - |  |
| `discountName` | `character varying(255)` | YES | - |  |
| `discountType` | `character varying(255)` | YES | - |  |
| `discountValue` | `numeric` | NO | `'0'::double precision` |  |
| `discountMaxValue` | `numeric` | NO | `'0'::double precision` |  |
| `discountAmount` | `numeric` | NO | `'0'::double precision` |  |
| `taxAmount` | `numeric` | NO | `'0'::double precision` |  |
| `purchasedItems` | `jsonb` | NO | `'[]'::jsonb` |  |
| `ticketsBackfilledAt` | `timestamp with time zone` | YES | - |  |
| `assigned_host_user_id` | `integer` | YES | - |  |

### **public.ReservationParticipants**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `bookingParticipantId` | `integer` | NO | `nextval('"BookingParticipants_bookingParticipantId_seq"'::regclass)` | **PK** |
| `bookingMasterId` | `integer` | NO | - | FK -> `ReservationMasters(bookingMasterId)` |
| `bookingId` | `integer` | YES | - | FK -> `Reservations(bookingId)` |
| `guestId` | `integer` | YES | - | FK -> `Visitors(guestId)` |
| `displayName` | `character varying(255)` | NO | - |  |
| `dateOfBirth` | `date` | YES | - |  |
| `participantType` | `USER-DEFINED` | NO | `'primary_guest'::"enum_BookingParticipants_participantType"` |  |
| `isMinor` | `boolean` | NO | `false` |  |
| `source` | `USER-DEFINED` | NO | `'bookingItem'::"enum_BookingParticipants_source"` |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |
| `checkedInAt` | `timestamp with time zone` | YES | - |  |
| `checkedInBy` | `integer` | YES | - |  |
| `wristbandId` | `integer` | YES | - |  |
| `wristbandNumber` | `character varying(255)` | YES | - |  |

### **public.Reservations**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `bookingId` | `integer` | NO | `nextval('"Reservations_bookingId_seq"'::regclass)` | **PK** |
| `bookingMasterId` | `integer` | NO | - | FK -> `ReservationMasters(bookingMasterId)` |
| `slotId` | `integer` | YES | - | FK -> `SessionSlots(slotId)` |
| `variationId` | `integer` | NO | - | FK -> `TicketTypes(variationId)` |
| `areaId` | `integer` | YES | - | FK -> `Areas(areaId)` |
| `date` | `date` | NO | - |  |
| `timefrom` | `character varying(255)` | NO | - |  |
| `timeto` | `character varying(255)` | NO | - |  |
| `noOfTickets` | `integer` | NO | - |  |
| `pricePerTicket` | `numeric` | NO | - |  |
| `totalPrice` | `numeric` | NO | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `capacityUsed` | `integer` | NO | `1` |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `parentBookingItemId` | `integer` | YES | - |  |
| `expiresAt` | `timestamp with time zone` | YES | - |  |
| `redemptionToken` | `character varying(64)` | YES | - |  |

### **public.SequelizeMeta**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `name` | `character varying(255)` | NO | - | **PK** |

### **public.SessionPlans**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `scheduleId` | `integer` | NO | `nextval('"Schedules_scheduleId_seq"'::regclass)` | **PK** |
| `productId` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `venueId` | `integer` | YES | - |  |
| `name` | `character varying(255)` | YES | - |  |
| `description` | `text` | YES | - |  |
| `sessionStartEvery` | `json` | YES | - |  |
| `includedVariationIds` | `ARRAY` | YES | - |  |
| `includedResourceIds` | `ARRAY` | YES | - |  |
| `customSessions` | `jsonb` | YES | - |  |
| `isAllowAfterHours` | `boolean` | YES | `false` |  |
| `schedulePeriod` | `USER-DEFINED` | NO | `'every_day'::"enum_Schedules_schedulePeriod"` |  |
| `days` | `ARRAY` | YES | - |  |
| `customDates` | `ARRAY` | YES | - |  |
| `dateFrom` | `date` | YES | - |  |
| `dateTo` | `date` | YES | - |  |
| `exceptionDates` | `ARRAY` | YES | `ARRAY[]::date[]` |  |
| `isIncludeEveryDay` | `boolean` | YES | `false` |  |
| `from_time` | `character varying(255)` | YES | - |  |
| `to_time` | `character varying(255)` | YES | - |  |
| `is_opening` | `boolean` | YES | `false` |  |
| `is_closing` | `boolean` | YES | `false` |  |
| `autoExtended` | `boolean` | YES | `false` |  |
| `maxBookingAllowWindows` | `json` | YES | - |  |
| `status` | `USER-DEFINED` | YES | `'active'::"enum_Schedules_status"` |  |
| `slotGenerationStatus` | `USER-DEFINED` | YES | `'pending'::"enum_Schedules_slotGenerationStatus"` |  |
| `lastProcessedDate` | `date` | YES | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `exceptionDateRules` | `jsonb` | NO | `'[]'::jsonb` |  |

### **public.SessionSlots**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `slotId` | `integer` | NO | `nextval('"ScheduleDetails_slotId_seq"'::regclass)` | **PK** |
| `scheduleId` | `integer` | NO | - | FK -> `SessionPlans(scheduleId)` |
| `areaId` | `integer` | NO | - | FK -> `Areas(areaId)` |
| `variationId` | `integer` | YES | - |  |
| `date` | `date` | NO | - |  |
| `time` | `character varying(255)` | NO | - |  |
| `fromTime` | `character varying(255)` | NO | - |  |
| `toTime` | `character varying(255)` | NO | - |  |
| `capacityOrig` | `integer` | NO | - |  |
| `availableCapacity` | `integer` | NO | - |  |
| `label` | `character varying(255)` | YES | - |  |
| `limitPerStartTime` | `integer` | YES | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `resourceFromTime` | `character varying(255)` | YES | - |  |
| `resourceToTime` | `character varying(255)` | YES | - |  |
| `bufferMinutes` | `integer` | NO | `0` |  |

### **public.Sessions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `sid` | `character varying(36)` | NO | - | **PK** |
| `expires` | `timestamp with time zone` | YES | - |  |
| `data` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.SpecialHours**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `specialHourId` | `integer` | NO | `nextval('"SpecialHours_specialHourId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `date` | `date` | NO | - |  |
| `label` | `character varying(255)` | NO | - |  |
| `openTime` | `time without time zone` | YES | - |  |
| `closeTime` | `time without time zone` | YES | - |  |
| `isClosed` | `boolean` | YES | `false` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **public.TicketHolderBindings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `integer` | NO | `nextval('"TicketHolderBindings_id_seq"'::regclass)` | **PK** |
| `ticketId` | `integer` | NO | - |  |
| `bookingParticipantId` | `integer` | NO | - |  |
| `waiverSignatureId` | `integer` | YES | - |  |
| `boundAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `boundByUserId` | `integer` | YES | - |  |
| `terminalDeviceId` | `integer` | YES | - |  |
| `source` | `USER-DEFINED` | NO | `'waiver_auto'::"enum_TicketHolderBindings_source"` |  |
| `unboundAt` | `timestamp with time zone` | YES | - |  |
| `unboundByUserId` | `integer` | YES | - |  |
| `notes` | `character varying(255)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.TicketRedemptions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `redemptionId` | `integer` | NO | `nextval('"TicketRedemptions_redemptionId_seq"'::regclass)` | **PK** |
| `ticketId` | `integer` | YES | - |  |
| `bookingId` | `integer` | YES | - |  |
| `redeemedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `redeemedByUserId` | `integer` | YES | - |  |
| `terminalDeviceId` | `integer` | YES | - |  |
| `gateOrZone` | `character varying(255)` | YES | - |  |
| `managerOverride` | `boolean` | NO | `false` |  |
| `managerOverrideReason` | `character varying(255)` | YES | - |  |
| `notes` | `character varying(255)` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `redemptionType` | `character varying(40)` | NO | `'ticket'::character varying` |  |
| `sourceId` | `integer` | YES | - |  |
| `sourceToken` | `character varying(128)` | YES | - |  |
| `guestId` | `integer` | YES | - |  |
| `participantId` | `integer` | YES | - |  |
| `activityId` | `integer` | YES | - |  |
| `variationId` | `integer` | YES | - |  |
| `quantityRedeemed` | `integer` | NO | `1` |  |
| `status` | `character varying(30)` | NO | `'success'::character varying` |  |
| `reasonCode` | `character varying(80)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |

### **public.TicketTypes**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `variationId` | `integer` | NO | `nextval('"Variations_variationId_seq"'::regclass)` | **PK** |
| `productDetailsId` | `integer` | NO | - | FK -> `ExperienceDetails(productDetailsId)` |
| `name` | `character varying(100)` | NO | - |  |
| `price` | `numeric` | NO | - |  |
| `additionalsVarData` | `json` | YES | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |

### **public.Tickets**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `ticketId` | `integer` | NO | `nextval('"Tickets_ticketId_seq"'::regclass)` | **PK** |
| `bookingId` | `integer` | NO | - |  |
| `bookingItemId` | `integer` | YES | - |  |
| `activityId` | `integer` | NO | - |  |
| `variationId` | `integer` | YES | - |  |
| `productType` | `USER-DEFINED` | NO | - |  |
| `participantId` | `integer` | YES | - |  |
| `slotId` | `integer` | YES | - |  |
| `validFrom` | `timestamp with time zone` | YES | - |  |
| `validUntil` | `timestamp with time zone` | YES | - |  |
| `unitPrice` | `numeric` | NO | `0` |  |
| `discountAllocation` | `numeric` | NO | `0` |  |
| `taxAllocation` | `numeric` | NO | `0` |  |
| `redemptionMode` | `USER-DEFINED` | NO | `'single'::"enum_Tickets_redemptionMode"` |  |
| `maxRedemptions` | `integer` | NO | `1` |  |
| `redemptionCount` | `integer` | NO | `0` |  |
| `status` | `USER-DEFINED` | NO | `'issued'::"enum_Tickets_status"` |  |
| `ticketCode` | `character varying(16)` | NO | - |  |
| `wristbandColor` | `character varying(255)` | YES | - |  |
| `issuedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `voidedAt` | `timestamp with time zone` | YES | - |  |
| `voidReason` | `character varying(255)` | YES | - |  |
| `replacedByTicketId` | `integer` | YES | - |  |
| `notes` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `constraints` | `jsonb` | YES | - |  |

### **public.VisitorRelationships**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `guestRelationshipId` | `integer` | NO | `nextval('"GuestRelationships_guestRelationshipId_seq"'::regclass)` | **PK** |
| `parentGuestId` | `integer` | NO | - | FK -> `Visitors(guestId)` |
| `childGuestId` | `integer` | NO | - | FK -> `Visitors(guestId)` |
| `relationshipType` | `USER-DEFINED` | NO | `'parent'::"enum_GuestRelationships_relationshipType"` |  |
| `isPrimary` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.VisitorWaiverSignatures**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `integer` | NO | `nextval('"GuestWaiverSignatures_id_seq"'::regclass)` | **PK** |
| `waiverId` | `integer` | NO | - | FK -> `waivers(waiverId)` |
| `guestId` | `integer` | NO | - | FK -> `Visitors(guestId)` |
| `signedByName` | `character varying(255)` | YES | - |  |
| `guestDateOfBirth` | `date` | YES | - |  |
| `signedAt` | `timestamp with time zone` | YES | - |  |
| `expiredAt` | `timestamp with time zone` | YES | - |  |
| `agreedCheckboxes` | `jsonb` | YES | - |  |
| `includesMinors` | `boolean` | NO | `false` |  |
| `signatureImage` | `text` | YES | - |  |
| `minors` | `jsonb` | YES | - |  |
| `isGuardian` | `boolean` | YES | `false` |  |
| `status` | `USER-DEFINED` | YES | `'pending'::"enum_GuestWaiverSignatures_status"` |  |
| `token` | `character varying(255)` | YES | - |  |
| `deletedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `bookingMasterId` | `integer` | YES | - | FK -> `ReservationMasters(bookingMasterId)` |
| `waiverVersionId` | `integer` | YES | - |  |
| `waiverVersionSnapshot` | `jsonb` | YES | - |  |
| `expiryReminderSentAt` | `timestamp with time zone` | YES | - |  |
| `signingHistory` | `jsonb` | YES | - |  |

### **public.Visitors**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `guestId` | `integer` | NO | `nextval('"Guests_guestId_seq"'::regclass)` | **PK** |
| `guestName` | `character varying(255)` | NO | - |  |
| `guestEmail` | `character varying(255)` | NO | - |  |
| `guestPhone` | `character varying(255)` | NO | - |  |
| `guestAddress` | `text` | YES | - |  |
| `postcode` | `character varying(255)` | YES | - |  |
| `gender` | `USER-DEFINED` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `dateOfBirth` | `date` | YES | - |  |
| `tags` | `ARRAY` | NO | `(ARRAY[]::character varying[])::character varying(255)[]` |  |
| `lifecycle` | `character varying(20)` | NO | `'lead'::character varying` |  |
| `source` | `character varying(50)` | YES | - |  |
| `doNotContact` | `boolean` | NO | `false` |  |
| `engagementScore` | `integer` | NO | `0` |  |
| `lastEngagedAt` | `timestamp with time zone` | YES | - |  |
| `customAttributes` | `jsonb` | NO | `'{}'::jsonb` |  |

### **public.WaiverCoverages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverCoverageId` | `integer` | NO | `nextval('"WaiverCoverages_waiverCoverageId_seq"'::regclass)` | **PK** |
| `waiverSignatureId` | `integer` | NO | - | FK -> `VisitorWaiverSignatures(id)` |
| `waiverId` | `integer` | NO | - | FK -> `waivers(waiverId)` |
| `guestId` | `integer` | YES | - | FK -> `Visitors(guestId)` |
| `coveredByGuestId` | `integer` | YES | - | FK -> `Visitors(guestId)` |
| `bookingId` | `integer` | YES | - | FK -> `ReservationMasters(bookingMasterId)` |
| `bookingParticipantId` | `integer` | YES | - | FK -> `ReservationParticipants(bookingParticipantId)` |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `status` | `USER-DEFINED` | NO | `'valid'::"enum_WaiverCoverages_status"` |  |
| `validFrom` | `timestamp with time zone` | YES | - |  |
| `validUntil` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.WaiverFormFields**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverFormFieldId` | `integer` | NO | `nextval('"WaiverFormFields_waiverFormFieldId_seq"'::regclass)` | **PK** |
| `waiverId` | `integer` | NO | - | FK -> `waivers(waiverId)` |
| `label` | `character varying(255)` | NO | - |  |
| `fieldType` | `USER-DEFINED` | NO | `'short_text'::"enum_WaiverFormFields_fieldType"` |  |
| `required` | `boolean` | NO | `false` |  |
| `options` | `jsonb` | NO | `'[]'::jsonb` |  |
| `sortOrder` | `integer` | NO | `0` |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.WaiverFormResponses**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverFormResponseId` | `integer` | NO | `nextval('"WaiverFormResponses_waiverFormResponseId_seq"'::regclass)` | **PK** |
| `waiverSignatureId` | `integer` | NO | - | FK -> `VisitorWaiverSignatures(id)` |
| `waiverVersionId` | `integer` | YES | - | FK -> `WaiverVersions(waiverVersionId)` |
| `waiverFormFieldId` | `integer` | YES | - | FK -> `WaiverFormFields(waiverFormFieldId)` |
| `fieldKey` | `character varying(255)` | NO | - |  |
| `label` | `character varying(255)` | NO | - |  |
| `fieldType` | `character varying(255)` | NO | - |  |
| `value` | `jsonb` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.WaiverPageSettings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverPageSettingsId` | `integer` | NO | `nextval('"WaiverPageSettings_waiverPageSettingsId_seq"'::regclass)` | **PK** |
| `waiverId` | `integer` | NO | - | FK -> `waivers(waiverId)` |
| `pageTitle` | `character varying(255)` | YES | - |  |
| `pageSubtitle` | `text` | YES | - |  |
| `introText` | `text` | YES | - |  |
| `successMessage` | `text` | YES | - |  |
| `logoUrl` | `text` | YES | - |  |
| `heroImageUrl` | `text` | YES | - |  |
| `showLocationName` | `boolean` | NO | `true` |  |
| `showWaiverName` | `boolean` | NO | `true` |  |
| `showExpiryNotice` | `boolean` | NO | `true` |  |
| `showMinorSectionByDefault` | `boolean` | NO | `false` |  |
| `signatureLabel` | `character varying(255)` | YES | - |  |
| `submitButtonLabel` | `character varying(255)` | YES | - |  |
| `primaryColor` | `character varying(20)` | YES | - |  |
| `backgroundColor` | `character varying(20)` | YES | - |  |
| `cardColor` | `character varying(20)` | YES | - |  |
| `textColor` | `character varying(20)` | YES | - |  |
| `customCss` | `text` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |

### **public.WaiverVersions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverVersionId` | `integer` | NO | `nextval('"WaiverVersions_waiverVersionId_seq"'::regclass)` | **PK** |
| `waiverId` | `integer` | NO | - | FK -> `waivers(waiverId)` |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `versionNumber` | `integer` | NO | - |  |
| `name` | `character varying(255)` | NO | - |  |
| `content` | `text` | NO | - |  |
| `imageUrl` | `text` | YES | - |  |
| `settingsSnapshot` | `jsonb` | NO | `'{}'::jsonb` |  |
| `pageSettingsSnapshot` | `jsonb` | NO | `'{}'::jsonb` |  |
| `formFieldsSnapshot` | `jsonb` | NO | `'[]'::jsonb` |  |
| `publishMode` | `USER-DEFINED` | NO | `'future_signers'::"enum_WaiverVersions_publishMode"` |  |
| `publishedBy` | `integer` | YES | - |  |
| `publishedAt` | `timestamp with time zone` | NO | - |  |
| `isActive` | `boolean` | NO | `true` |  |
| `deactivatedAt` | `timestamp with time zone` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `languages` | `jsonb` | NO | `'[]'::jsonb` |  |

### **public.WristbandColors**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `colorId` | `integer` | NO | `nextval('"WristbandColors_colorId_seq"'::regclass)` | **PK** |
| `locationId` | `integer` | NO | - |  |
| `displayOrder` | `integer` | NO | - |  |
| `name` | `character varying(40)` | NO | - |  |
| `hex` | `character varying(7)` | NO | - |  |
| `isActive` | `boolean` | NO | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.WristbandProductExclusions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `locationId` | `integer` | NO | - | **PK** |
| `activityId` | `integer` | NO | - | **PK** |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.WristbandProductOverrides**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `locationId` | `integer` | NO | - | **PK** |
| `activityId` | `integer` | NO | - | **PK** |
| `colorId` | `integer` | NO | - |  |
| `createdAt` | `timestamp with time zone` | NO | - |  |
| `updatedAt` | `timestamp with time zone` | NO | - |  |

### **public.admin_locations**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `user_id` | `integer` | NO | - | **PK** |
| `venueId` | `integer` | NO | - | **PK** |
| `is_default_location` | `boolean` | NO | `false` |  |

### **public.booking_staff_assignments**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `booking_staff_assignment_id` | `integer` | NO | `nextval('booking_staff_assignments_booking_staff_assignment_id_seq'::regclass)` | **PK** |
| `booking_id` | `integer` | NO | - |  |
| `role` | `character varying(40)` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `assigned_by_user_id` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.break_rules**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `break_rule_id` | `integer` | NO | `nextval('break_rules_break_rule_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `name` | `character varying(120)` | YES | - |  |
| `length_minutes` | `integer` | NO | `30` |  |
| `paid` | `boolean` | NO | `false` |  |
| `duration_mode` | `character varying(8)` | NO | `'range'::character varying` |  |
| `min_duration_minutes` | `integer` | YES | - |  |
| `max_duration_minutes` | `integer` | YES | - |  |
| `fixed_duration_minutes` | `integer` | YES | - |  |
| `scope_all_positions` | `boolean` | NO | `true` |  |
| `scope_position_labels` | `jsonb` | NO | `'[]'::jsonb` |  |
| `is_active` | `boolean` | NO | `true` |  |
| `sort_order` | `integer` | NO | `0` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.chat_channel_messages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `chat_channel_message_id` | `integer` | NO | `nextval('chat_channel_messages_chat_channel_message_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `kind` | `character varying(20)` | NO | `'team_chat'::character varying` |  |
| `user_id` | `integer` | NO | - |  |
| `text` | `text` | NO | - |  |
| `deleted_at` | `timestamp with time zone` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.chat_channel_read_markers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `chat_channel_read_marker_id` | `integer` | NO | `nextval('chat_channel_read_markers_chat_channel_read_marker_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `kind` | `character varying(20)` | NO | - |  |
| `last_seen_message_id` | `integer` | NO | `0` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.chat_conversations**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `chat_conversation_id` | `integer` | NO | `nextval('chat_conversations_chat_conversation_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | YES | - |  |
| `user_id` | `integer` | YES | - |  |
| `guest_id` | `integer` | YES | - |  |
| `audience` | `character varying(20)` | NO | `'admin'::character varying` |  |
| `title` | `character varying(180)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `handoff_ticket_id` | `integer` | YES | - |  |
| `anonymous_id` | `character varying(80)` | YES | - |  |
| `context_path` | `character varying(255)` | YES | - |  |
| `last_message_at` | `timestamp with time zone` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.chat_messages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `chat_message_id` | `integer` | NO | `nextval('chat_messages_chat_message_id_seq'::regclass)` | **PK** |
| `chat_conversation_id` | `integer` | NO | - |  |
| `role` | `character varying(16)` | NO | - |  |
| `content` | `text` | YES | - |  |
| `tool_calls` | `jsonb` | YES | - |  |
| `tool_results` | `jsonb` | YES | - |  |
| `attachments` | `jsonb` | YES | - |  |
| `tokens_in` | `integer` | YES | - |  |
| `tokens_out` | `integer` | YES | - |  |
| `model_name` | `character varying(60)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.customers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerid` | `integer` | YES | - |  |
| `fullname` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `mobile` | `text` | YES | - |  |
| `gender` | `text` | YES | - |  |
| `totalspend` | `numeric` | YES | - |  |
| `totaldiscount` | `numeric` | YES | - |  |
| `postalcode` | `text` | YES | - |  |
| `joineddate` | `date` | YES | - |  |
| `dateofbirth` | `date` | YES | - |  |
| `address` | `text` | YES | - |  |
| `city` | `text` | YES | - |  |
| `state` | `text` | YES | - |  |
| `acceptmarketing` | `boolean` | YES | - |  |
| `acceptmarketingsms` | `boolean` | YES | - |  |
| `lastbookingdate` | `date` | YES | - |  |
| `numberofbooking` | `integer` | YES | - |  |
| `spendonlastvisit` | `numeric` | YES | - |  |
| `location` | `text` | YES | - |  |
| `campspend` | `numeric` | YES | - |  |
| `lastcampdate` | `date` | YES | - |  |
| `groupspend` | `numeric` | YES | - |  |
| `lastgroupdate` | `date` | YES | - |  |
| `jumpspend` | `numeric` | YES | - |  |
| `lastjumpdate` | `date` | YES | - |  |
| `birthdayspend` | `numeric` | YES | - |  |
| `lastbirthday` | `date` | YES | - |  |
| `membeshipspend` | `numeric` | YES | - |  |
| `membershipdate` | `date` | YES | - |  |
| `facilityrentalspend` | `numeric` | YES | - |  |
| `facilityrentallast` | `date` | YES | - |  |

### **public.eventbookings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `comments` | `text` | YES | - |  |
| `posnotes` | `text` | YES | - |  |
| `items` | `text` | YES | - |  |
| `device` | `text` | YES | - |  |
| `product` | `text` | YES | - |  |
| `locations` | `text` | YES | - |  |
| `bookingname` | `text` | YES | - |  |
| `bookingdate` | `date` | YES | - |  |
| `transactiondate` | `timestamp without time zone` | YES | - |  |
| `status` | `text` | YES | - |  |
| `firstname` | `text` | YES | - |  |
| `contactname` | `text` | YES | - |  |
| `lastname` | `text` | YES | - |  |
| `sessionstarttime` | `text` | YES | - |  |
| `sessionendtime` | `text` | YES | - |  |
| `cost` | `numeric` | YES | - |  |
| `balance` | `numeric` | YES | - |  |
| `customerid` | `integer` | YES | - |  |
| `guests` | `integer` | YES | - |  |
| `contactnumber` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `purchaselocation` | `text` | YES | - |  |
| `createddate` | `timestamp without time zone` | YES | - |  |
| `company` | `text` | YES | - |  |
| `bookingid` | `text` | YES | - |  |
| `manager` | `text` | YES | - |  |
| `location` | `text` | YES | - |  |
| `category` | `text` | YES | - |  |

### **public.hr_document_assignments**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `hr_document_assignment_id` | `integer` | NO | `nextval('hr_document_assignments_hr_document_assignment_id_seq'::regclass)` | **PK** |
| `hr_document_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `due_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.hr_document_signatures**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `hr_document_signature_id` | `integer` | NO | `nextval('hr_document_signatures_hr_document_signature_id_seq'::regclass)` | **PK** |
| `hr_document_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `signed_name` | `character varying(180)` | NO | - |  |
| `signed_at` | `timestamp with time zone` | NO | `now()` |  |
| `ip_address` | `character varying(64)` | YES | - |  |
| `user_agent` | `character varying(255)` | YES | - |  |
| `document_version` | `integer` | NO | `1` |  |
| `consent_text` | `character varying(800)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `signed_pdf_url` | `character varying(600)` | YES | - |  |
| `signed_pdf_key` | `character varying(600)` | YES | - |  |
| `drawn_signature_url` | `character varying(600)` | YES | - |  |
| `signature_method` | `character varying(16)` | NO | `'typed'::character varying` |  |

### **public.hr_documents**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `hr_document_id` | `integer` | NO | `nextval('hr_documents_hr_document_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `title` | `character varying(180)` | NO | - |  |
| `description` | `character varying(800)` | YES | - |  |
| `category` | `character varying(40)` | NO | `'policy'::character varying` |  |
| `file_url` | `character varying(600)` | NO | - |  |
| `file_key` | `character varying(600)` | YES | - |  |
| `file_name` | `character varying(255)` | YES | - |  |
| `file_mime_type` | `character varying(100)` | YES | - |  |
| `file_size_bytes` | `integer` | YES | - |  |
| `version` | `integer` | NO | `1` |  |
| `requires_signature` | `boolean` | NO | `true` |  |
| `assigned_to_all` | `boolean` | NO | `true` |  |
| `is_active` | `boolean` | NO | `true` |  |
| `posted_by_user_id` | `integer` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.leave_balances**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `leave_balance_id` | `integer` | NO | `nextval('leave_balances_leave_balance_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `leave_type_id` | `integer` | NO | - |  |
| `year` | `integer` | NO | - |  |
| `allowance_days` | `numeric` | NO | `0` |  |
| `used_days` | `numeric` | NO | `0` |  |
| `pending_days` | `numeric` | NO | `0` |  |
| `adjustment_note` | `character varying(400)` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `carryover_days` | `numeric` | NO | `0` |  |
| `last_accrual_at` | `timestamp with time zone` | YES | - |  |
| `source` | `character varying(16)` | NO | `'manual'::character varying` |  |

### **public.leave_requests**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `leave_request_id` | `integer` | NO | `nextval('leave_requests_leave_request_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `leave_type_id` | `integer` | NO | - |  |
| `start_date` | `date` | NO | - |  |
| `end_date` | `date` | NO | - |  |
| `days` | `numeric` | NO | - |  |
| `employee_note` | `character varying(800)` | YES | - |  |
| `status` | `character varying(16)` | NO | `'pending'::character varying` |  |
| `reviewed_by_user_id` | `integer` | YES | - |  |
| `reviewed_at` | `timestamp with time zone` | YES | - |  |
| `decision_note` | `character varying(800)` | YES | - |  |
| `cancelled_at` | `timestamp with time zone` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `start_day_part` | `character varying(10)` | NO | `'full'::character varying` |  |
| `end_day_part` | `character varying(10)` | NO | `'full'::character varying` |  |

### **public.leave_types**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `leave_type_id` | `integer` | NO | `nextval('leave_types_leave_type_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `name` | `character varying(80)` | NO | - |  |
| `code` | `character varying(24)` | NO | - |  |
| `paid` | `boolean` | NO | `true` |  |
| `color` | `character varying(16)` | YES | - |  |
| `default_allowance_days` | `numeric` | NO | `0` |  |
| `requires_approval` | `boolean` | NO | `true` |  |
| `is_active` | `boolean` | NO | `true` |  |
| `sort_order` | `integer` | NO | `0` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `accrual_type` | `character varying(16)` | NO | `'none'::character varying` |  |
| `max_carryover_days` | `numeric` | NO | `0` |  |
| `carryover_expires_months` | `integer` | NO | `0` |  |

### **public.location_geofences**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `location_geofence_id` | `integer` | NO | `nextval('location_geofences_location_geofence_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `latitude` | `numeric` | NO | - |  |
| `longitude` | `numeric` | NO | - |  |
| `radius_meters` | `integer` | NO | `200` |  |
| `enforced` | `boolean` | NO | `false` |  |
| `updated_by_user_id` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.location_payment_settings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `setting_id` | `integer` | NO | `nextval('location_payment_settings_setting_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `adapter_key` | `character varying(60)` | NO | - |  |
| `channel` | `character varying(20)` | NO | - |  |
| `tender_type` | `character varying(20)` | NO | `'card'::character varying` |  |
| `currency` | `character varying(3)` | YES | - |  |
| `mode` | `character varying(20)` | NO | `'sandbox'::character varying` |  |
| `enabled` | `boolean` | NO | `true` |  |
| `priority` | `integer` | NO | `100` |  |
| `default_terminal_id` | `integer` | YES | - |  |
| `config` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.location_scheduling_settings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `location_scheduling_settings_id` | `integer` | NO | `nextval('location_scheduling_settings_location_scheduling_settings_i_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `settings` | `jsonb` | NO | `'{}'::jsonb` |  |
| `updated_by_user_id` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.manager_override_audits**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `audit_id` | `integer` | NO | `nextval('manager_override_audits_audit_id_seq'::regclass)` | **PK** |
| `cashier_user_id` | `integer` | NO | - |  |
| `manager_user_id` | `integer` | NO | - |  |
| `terminal_device_id` | `integer` | YES | - |  |
| `location_id` | `integer` | YES | - |  |
| `action` | `character varying(64)` | NO | - |  |
| `target_type` | `character varying(64)` | YES | - |  |
| `target_id` | `character varying(64)` | YES | - |  |
| `reason` | `character varying(255)` | YES | - |  |
| `payload` | `json` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.member_accounts**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `member_account_id` | `integer` | NO | `nextval('member_accounts_member_account_id_seq'::regclass)` | **PK** |
| `guest_id` | `integer` | NO | - |  |
| `email` | `character varying(255)` | NO | - |  |
| `password_hash` | `character varying(255)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `location_id` | `integer` | YES | - |  |
| `last_login_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `google_id` | `character varying(255)` | YES | - |  |
| `email_verified` | `boolean` | NO | `false` |  |

### **public.open_shifts**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `open_shift_id` | `integer` | NO | `nextval('open_shifts_open_shift_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `area_id` | `integer` | YES | - |  |
| `shift_date` | `date` | NO | - |  |
| `start_time` | `character varying(5)` | NO | - |  |
| `end_time` | `character varying(5)` | NO | - |  |
| `break_minutes` | `integer` | NO | `0` |  |
| `role_label` | `character varying(80)` | YES | - |  |
| `slots_available` | `integer` | NO | `1` |  |
| `slots_claimed` | `integer` | NO | `0` |  |
| `status` | `character varying(16)` | NO | `'open'::character varying` |  |
| `posted_by_user_id` | `integer` | YES | - |  |
| `notes` | `character varying(400)` | YES | - |  |
| `cancelled_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.parks**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `venueId` | `integer` | NO | `nextval('"Locations_locationId_seq"'::regclass)` | **PK** |
| `legalBusinessName` | `character varying(255)` | NO | - |  |
| `streetNumberOrBuildingName` | `character varying(100)` | NO | - |  |
| `streetName` | `character varying(100)` | NO | - |  |
| `townOrCity` | `character varying(100)` | NO | - |  |
| `stateOrProvince` | `character varying(100)` | NO | - |  |
| `country` | `character varying(100)` | NO | - |  |
| `displayAddress` | `character varying(500)` | YES | - |  |
| `contactName` | `character varying(100)` | NO | - |  |
| `contactNumber` | `character varying(20)` | NO | - |  |
| `createdAt` | `timestamp with time zone` | YES | - |  |
| `updatedAt` | `timestamp with time zone` | YES | - |  |
| `businessNumber` | `character varying(100)` | YES | - |  |
| `website` | `character varying(255)` | YES | - |  |
| `publicPhoneNumber` | `character varying(20)` | YES | - |  |
| `postalCode` | `character varying(20)` | YES | - |  |
| `bookingNotificationEmail` | `character varying(255)` | YES | - |  |
| `requireEmailOnBookings` | `boolean` | YES | `true` |  |
| `restrictOverbooking` | `boolean` | YES | `true` |  |
| `requirePOSPinForRefunds` | `boolean` | YES | `false` |  |
| `bookingModifications` | `character varying(50)` | YES | `'anytime'::character varying` |  |
| `reserveBookingsByDefault` | `boolean` | YES | `false` |  |
| `holdBookingsTentatively` | `boolean` | YES | `false` |  |
| `holdBookingDurationMinutes` | `integer` | YES | `60` |  |
| `sessionTimeFormat` | `character varying(10)` | YES | `'12hr'::character varying` |  |
| `reportingBasis` | `character varying(20)` | YES | `'accrual'::character varying` |  |
| `timezone` | `character varying(50)` | YES | - |  |
| `currency` | `character varying(10)` | YES | `'CAD'::character varying` |  |
| `hideTaxLabels` | `boolean` | YES | `false` |  |
| `taxCalculation` | `character varying(20)` | YES | `'add_to_price'::character varying` |  |
| `paymentMethods` | `jsonb` | NO | `'["bank_transfer", "cash", "cheque", "complimentary", "eftpos", "gift_card", "send_payment_request"]'::jsonb` |  |
| `slug` | `character varying(100)` | YES | - |  |
| `backgroundImageUrl` | `character varying(500)` | YES | `NULL::character varying` |  |
| `primaryColor` | `character varying(20)` | YES | `NULL::character varying` |  |
| `secondaryColor` | `character varying(20)` | YES | `NULL::character varying` |  |
| `logoUrl` | `character varying(500)` | YES | `NULL::character varying` |  |
| `logoUsage` | `jsonb` | NO | `'[]'::jsonb` |  |
| `wristbandMode` | `character varying(10)` | NO | `'none'::character varying` |  |
| `wristbandConfig` | `jsonb` | NO | `'{"sortBy": "end_time", "rotationResetDay": 1, "dailyRotationEnabled": false}'::jsonb` |  |

### **public.payment_allocations**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `allocation_id` | `integer` | NO | `nextval('payment_allocations_allocation_id_seq'::regclass)` | **PK** |
| `transaction_id` | `integer` | NO | - |  |
| `source_type` | `character varying(30)` | NO | - |  |
| `source_id` | `integer` | NO | - |  |
| `amount` | `numeric` | NO | - |  |
| `currency` | `character varying(3)` | NO | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.payment_credential_audit_log**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `audit_id` | `integer` | NO | `nextval('payment_credential_audit_log_audit_id_seq'::regclass)` | **PK** |
| `credential_id` | `integer` | YES | - |  |
| `provider_key` | `character varying(40)` | NO | - |  |
| `location_id` | `integer` | YES | - |  |
| `mode` | `character varying(20)` | YES | - |  |
| `action` | `character varying(20)` | NO | - |  |
| `actor_user_id` | `integer` | YES | - |  |
| `actor_role` | `character varying(60)` | YES | - |  |
| `actor_email` | `character varying(255)` | YES | - |  |
| `changes` | `jsonb` | NO | `'{}'::jsonb` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.payment_provider_credentials**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `credential_id` | `integer` | NO | `nextval('payment_provider_credentials_credential_id_seq'::regclass)` | **PK** |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `location_id` | `integer` | YES | - |  |
| `mode` | `character varying(20)` | NO | `'sandbox'::character varying` |  |
| `public_key_ref` | `text` | YES | - |  |
| `secret_key_ref` | `text` | NO | - |  |
| `webhook_secret_ref` | `text` | YES | - |  |
| `extra` | `jsonb` | NO | `'{}'::jsonb` |  |
| `rotated_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.payment_providers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `provider_id` | `integer` | NO | `nextval('payment_providers_provider_id_seq'::regclass)` | **PK** |
| `key` | `character varying(40)` | NO | - |  |
| `display_name` | `character varying(120)` | NO | - |  |
| `supports_online` | `boolean` | NO | `false` |  |
| `supports_terminal` | `boolean` | NO | `false` |  |
| `supports_recurring` | `boolean` | NO | `false` |  |
| `supports_saved_cards` | `boolean` | NO | `false` |  |
| `is_active` | `boolean` | NO | `true` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.payment_terminals**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `terminal_id` | `integer` | NO | `nextval('payment_terminals_terminal_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `pos_device_id` | `integer` | YES | - |  |
| `display_name` | `character varying(120)` | NO | - |  |
| `serial_number` | `character varying(120)` | YES | - |  |
| `provider_terminal_id` | `character varying(120)` | YES | - |  |
| `bridge_endpoint` | `character varying(255)` | YES | - |  |
| `bridge_auth_token_hash` | `character varying(128)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'unpaired'::character varying` |  |
| `last_seen_at` | `timestamp with time zone` | YES | - |  |
| `config` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `is_default` | `boolean` | NO | `false` |  |

### **public.payment_transaction_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `event_id` | `integer` | NO | `nextval('payment_transaction_events_event_id_seq'::regclass)` | **PK** |
| `transaction_id` | `integer` | NO | - |  |
| `event_type` | `character varying(60)` | NO | - |  |
| `actor` | `character varying(60)` | YES | - |  |
| `detail` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.payment_webhook_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `webhook_event_id` | `integer` | NO | `nextval('payment_webhook_events_webhook_event_id_seq'::regclass)` | **PK** |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `provider_event_id` | `character varying(120)` | NO | - |  |
| `event_type` | `character varying(120)` | NO | - |  |
| `signature_verified` | `boolean` | NO | `false` |  |
| `payload` | `jsonb` | NO | `'{}'::jsonb` |  |
| `received_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `processed_at` | `timestamp with time zone` | YES | - |  |
| `processing_status` | `character varying(20)` | NO | `'pending'::character varying` |  |
| `processing_error` | `text` | YES | - |  |
| `transaction_id` | `integer` | YES | - |  |

### **public.permissions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `permission_id` | `integer` | NO | `nextval('permissions_permission_id_seq1'::regclass)` | **PK** |
| `ui_id` | `integer` | YES | - | FK -> `uis(ui_id)` |
| `name` | `character varying(255)` | NO | - |  |
| `display_name` | `character varying(255)` | NO | - |  |
| `type` | `character varying(255)` | NO | `'button'::character varying` |  |
| `status` | `smallint` | NO | `1` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.pos_devices**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `pos_device_id` | `integer` | NO | `nextval('pos_devices_pos_device_id_seq'::regclass)` | **PK** |
| `venue_id` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(255)` | NO | - |  |
| `template` | `character varying(255)` | YES | - |  |
| `till_float` | `numeric` | NO | `150` |  |
| `allocated_user_id` | `integer` | YES | - | FK -> `users(user_id)` |
| `is_active` | `boolean` | NO | `true` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `pos_template_id` | `integer` | YES | - | FK -> `pos_templates(pos_template_id)` |
| `pairing_code` | `character varying(8)` | YES | - |  |
| `pairing_code_expires_at` | `timestamp with time zone` | YES | - |  |
| `last_paired_at` | `timestamp with time zone` | YES | - |  |
| `last_seen_at` | `timestamp with time zone` | YES | - |  |
| `last_login_at` | `timestamp with time zone` | YES | - |  |
| `last_login_user_id` | `integer` | YES | - |  |
| `app_version` | `character varying(255)` | YES | - |  |
| `has_cash_drawer` | `boolean` | NO | `true` |  |
| `open_drawer_for_cash_only` | `boolean` | NO | `true` |  |
| `device_timeout_minutes` | `integer` | YES | - |  |
| `receipt_printer_id` | `character varying(255)` | YES | - |  |
| `terminal_reader_id` | `character varying(255)` | YES | - |  |

### **public.pos_preset_section_products**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `integer` | NO | `nextval('pos_preset_section_activities_id_seq'::regclass)` | **PK** |
| `pos_section_id` | `integer` | NO | - | FK -> `pos_preset_sections(pos_section_id)` |
| `product_id` | `integer` | NO | - | FK -> `Experiences(productId)` |
| `display_order` | `integer` | NO | `0` |  |
| `tile_color` | `character varying(20)` | YES | `'#3B82F6'::character varying` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.pos_preset_sections**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `pos_section_id` | `integer` | NO | `nextval('pos_preset_sections_pos_section_id_seq'::regclass)` | **PK** |
| `pos_template_id` | `integer` | NO | - | FK -> `pos_templates(pos_template_id)` |
| `name` | `character varying(100)` | NO | - |  |
| `display_order` | `integer` | NO | `0` |  |
| `icon` | `character varying(50)` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `auto_fill_type_key` | `character varying(80)` | YES | - |  |

### **public.pos_settings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `pos_settings_id` | `integer` | NO | `nextval('pos_settings_pos_settings_id_seq'::regclass)` | **PK** |
| `venue_id` | `integer` | NO | - | FK -> `parks(venueId)` |
| `reprintable_receipts` | `boolean` | NO | `true` |  |
| `receipts_emailed_from_pos` | `boolean` | NO | `true` |  |
| `require_manager_code` | `boolean` | NO | `false` |  |
| `override_receipt_language` | `boolean` | NO | `false` |  |
| `enable_parking_complete` | `boolean` | NO | `true` |  |
| `enable_parking_draft` | `boolean` | NO | `true` |  |
| `hold_capacity_parked` | `boolean` | NO | `false` |  |
| `auto_clear_parked_bookings` | `boolean` | NO | `false` |  |
| `approval_needed_redeem_ticket` | `boolean` | NO | `false` |  |
| `show_business_name` | `boolean` | NO | `false` |  |
| `display_discounts_single_line` | `boolean` | NO | `false` |  |
| `dockets_for_stock` | `boolean` | NO | `true` |  |
| `show_logo` | `boolean` | NO | `false` |  |
| `single_line_item` | `boolean` | NO | `false` |  |
| `show_venue_representative` | `boolean` | NO | `false` |  |
| `banned_guests_manager_code` | `boolean` | NO | `false` |  |
| `enable_tipping` | `boolean` | NO | `false` |  |
| `predefined_tip_percentages` | `jsonb` | NO | `'[5, 10, 15]'::jsonb` |  |
| `allow_custom_tip_amount` | `boolean` | NO | `true` |  |
| `calculate_tips_on_booking_total` | `boolean` | NO | `false` |  |
| `default_tip_allocation` | `character varying(255)` | NO | `'booking_host'::character varying` |  |
| `enable_card_pre_auth` | `boolean` | NO | `false` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |
| `skip_new_guest_details` | `boolean` | NO | `true` |  |
| `auto_check_in_on_purchase` | `boolean` | NO | `true` |  |
| `allow_undo_check_in` | `boolean` | NO | `false` |  |
| `require_pin_for_reprint` | `boolean` | NO | `true` |  |
| `enable_discounts` | `boolean` | NO | `true` |  |
| `enable_custom_discount` | `boolean` | NO | `true` |  |
| `allow_custom_discount_without_pin` | `boolean` | NO | `false` |  |
| `cashier_discount_percent_limit` | `numeric` | NO | `20` |  |
| `cashier_discount_amount_limit` | `numeric` | NO | `20` |  |
| `join_grace_minutes` | `integer` | NO | `15` |  |
| `min_remaining_minutes` | `integer` | NO | `15` |  |
| `tip_pool_members` | `jsonb` | NO | `'[]'::jsonb` |  |

### **public.pos_templates**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `pos_template_id` | `integer` | NO | `nextval('pos_templates_pos_template_id_seq'::regclass)` | **PK** |
| `venue_id` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(100)` | NO | - |  |
| `description` | `character varying(255)` | YES | - |  |
| `default_till_float` | `numeric` | NO | `150` |  |
| `is_active` | `boolean` | NO | `true` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.processlog**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `bigint` | NO | `nextval('processlog_id_seq'::regclass)` | **PK** |
| `rundate` | `timestamp without time zone` | NO | `now()` |  |
| `status` | `text` | NO | - |  |
| `contactsuploaded` | `integer` | NO | `0` |  |
| `notes` | `text` | YES | - |  |

### **public.promos**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `discountId` | `integer` | NO | `nextval('"discounts_discountId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | YES | - | FK -> `parks(venueId)` |
| `name` | `character varying(255)` | NO | - |  |
| `status` | `smallint` | NO | `1` |  |
| `discount_by_type` | `integer` | NO | - |  |
| `code` | `character varying(255)` | YES | - |  |
| `value` | `numeric` | YES | - |  |
| `buyDiscounts` | `json` | YES | - |  |
| `getDiscounts` | `json` | YES | - |  |
| `maxValue` | `integer` | YES | - |  |
| `usageCount` | `integer` | YES | `0` |  |
| `discounts` | `json` | YES | - |  |
| `restrictBookingTo` | `date` | YES | - |  |
| `restrictRedemption` | `json` | YES | - |  |
| `isEmployeePromo` | `boolean` | YES | `false` |  |
| `application` | `json` | YES | - |  |
| `usageLimits` | `json` | YES | - |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.public_schedules**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `public_schedule_id` | `integer` | NO | `nextval('public_schedules_public_schedule_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `name` | `character varying(120)` | NO | - |  |
| `slug` | `character varying(80)` | NO | - |  |
| `start_date` | `date` | YES | - |  |
| `end_date` | `date` | YES | - |  |
| `include_names` | `boolean` | NO | `true` |  |
| `include_roles` | `boolean` | NO | `true` |  |
| `password_hash` | `character varying(160)` | YES | - |  |
| `expires_at` | `timestamp with time zone` | YES | - |  |
| `is_active` | `boolean` | NO | `true` |  |
| `created_by_user_id` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.recurring_payment_profiles**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `recurring_profile_id` | `integer` | NO | `nextval('recurring_payment_profiles_recurring_profile_id_seq'::regclass)` | **PK** |
| `guest_id` | `integer` | NO | - |  |
| `location_id` | `integer` | NO | - |  |
| `source_type` | `character varying(30)` | NO | - |  |
| `source_id` | `integer` | NO | - |  |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `provider_subscription_id` | `character varying(255)` | YES | - |  |
| `saved_payment_method_id` | `integer` | YES | - |  |
| `amount` | `numeric` | NO | - |  |
| `currency` | `character varying(3)` | NO | - |  |
| `interval_unit` | `character varying(10)` | NO | - |  |
| `interval_count` | `integer` | NO | `1` |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `current_period_start` | `timestamp with time zone` | YES | - |  |
| `current_period_end` | `timestamp with time zone` | YES | - |  |
| `next_billing_attempt_at` | `timestamp with time zone` | YES | - |  |
| `cancel_at_period_end` | `boolean` | NO | `false` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.refunds**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `refund_id` | `integer` | NO | `nextval('refunds_refund_id_seq'::regclass)` | **PK** |
| `transaction_id` | `integer` | NO | - |  |
| `provider_refund_id` | `character varying(255)` | YES | - |  |
| `amount` | `numeric` | NO | - |  |
| `currency` | `character varying(3)` | NO | - |  |
| `reason` | `character varying(255)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'pending'::character varying` |  |
| `idempotency_key` | `character varying(120)` | NO | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `initiated_by` | `character varying(60)` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.role_permissions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `role_id` | `integer` | NO | - | **PK** |
| `permission_id` | `integer` | NO | - | **PK**, FK -> `permissions(permission_id)` |

### **public.role_uis**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `role_id` | `integer` | NO | - | **PK** |
| `ui_id` | `integer` | NO | - | **PK**, FK -> `uis(ui_id)` |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.roles**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `role_id` | `integer` | NO | `nextval('roles_role_id_seq'::regclass)` | **PK** |
| `name` | `character varying(255)` | NO | - |  |
| `description` | `character varying(255)` | YES | - |  |
| `venueId` | `integer` | YES | - |  |
| `created_by` | `integer` | YES | - |  |
| `updated_by` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `status` | `smallint` | NO | `1` |  |

### **public.saved_payment_methods**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `saved_payment_method_id` | `integer` | NO | `nextval('saved_payment_methods_saved_payment_method_id_seq'::regclass)` | **PK** |
| `guest_id` | `integer` | NO | - |  |
| `provider_id` | `integer` | NO | - | FK -> `payment_providers(provider_id)` |
| `provider_customer_id` | `character varying(255)` | NO | - |  |
| `provider_method_id` | `character varying(255)` | NO | - |  |
| `brand` | `character varying(20)` | YES | - |  |
| `last4` | `character varying(4)` | YES | - |  |
| `exp_month` | `integer` | YES | - |  |
| `exp_year` | `integer` | YES | - |  |
| `is_default` | `boolean` | NO | `false` |  |
| `status` | `character varying(20)` | NO | `'active'::character varying` |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.shift_swaps**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `shift_swap_id` | `integer` | NO | `nextval('shift_swaps_shift_swap_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `staff_shift_id` | `integer` | NO | - |  |
| `requester_id` | `integer` | NO | - |  |
| `target_user_id` | `integer` | YES | - |  |
| `status` | `character varying(16)` | NO | `'open'::character varying` |  |
| `reason` | `character varying(400)` | YES | - |  |
| `reviewed_by_user_id` | `integer` | YES | - |  |
| `reviewed_at` | `timestamp with time zone` | YES | - |  |
| `decision_note` | `character varying(400)` | YES | - |  |
| `accepted_at` | `timestamp with time zone` | YES | - |  |
| `cancelled_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.shift_templates**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `shift_template_id` | `integer` | NO | `nextval('shift_templates_shift_template_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `name` | `character varying(120)` | NO | - |  |
| `start_time` | `character varying(5)` | NO | - |  |
| `end_time` | `character varying(5)` | NO | - |  |
| `break_minutes` | `integer` | NO | `0` |  |
| `role_label` | `character varying(80)` | YES | - |  |
| `area_id` | `integer` | YES | - |  |
| `color` | `character varying(16)` | YES | - |  |
| `notes` | `character varying(400)` | YES | - |  |
| `is_active` | `boolean` | NO | `true` |  |
| `sort_order` | `integer` | NO | `0` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.staff_attendance_events**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `attendance_event_id` | `integer` | NO | `nextval('staff_attendance_events_attendance_event_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - | FK -> `parks(venueId)` |
| `user_id` | `integer` | NO | - | FK -> `users(user_id)` |
| `staff_shift_id` | `integer` | YES | - | FK -> `staff_shifts(staff_shift_id)` |
| `event_type` | `character varying(24)` | NO | - |  |
| `source` | `character varying(24)` | NO | `'manual'::character varying` |  |
| `verification_provider` | `character varying(80)` | YES | - |  |
| `verification_reference` | `character varying(160)` | YES | - |  |
| `verification_score` | `numeric` | YES | - |  |
| `device_id` | `character varying(120)` | YES | - |  |
| `captured_at` | `timestamp with time zone` | NO | `now()` |  |
| `notes` | `text` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_by_user_id` | `integer` | YES | - | FK -> `users(user_id)` |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.staff_availability_windows**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `availability_window_id` | `integer` | NO | `nextval('staff_availability_windows_availability_window_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `day_of_week` | `integer` | NO | - |  |
| `start_time` | `character varying(5)` | NO | `'09:00'::character varying` |  |
| `end_time` | `character varying(5)` | NO | `'17:00'::character varying` |  |
| `is_available` | `boolean` | NO | `true` |  |
| `notes` | `character varying(400)` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.staff_shifts**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `staff_shift_id` | `integer` | NO | `nextval('staff_shifts_staff_shift_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - | FK -> `parks(venueId)` |
| `user_id` | `integer` | NO | - | FK -> `users(user_id)` |
| `area_id` | `integer` | YES | - | FK -> `Areas(areaId)` |
| `shift_date` | `date` | NO | - |  |
| `start_time` | `character varying(5)` | NO | - |  |
| `end_time` | `character varying(5)` | NO | - |  |
| `break_minutes` | `integer` | NO | `0` |  |
| `role_label` | `character varying(80)` | YES | - |  |
| `status` | `character varying(24)` | NO | `'scheduled'::character varying` |  |
| `notes` | `text` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.staff_timesheets**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `timesheet_id` | `integer` | NO | `nextval('staff_timesheets_timesheet_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `week_start_date` | `date` | NO | - |  |
| `status` | `character varying(20)` | NO | `'draft'::character varying` |  |
| `total_minutes` | `integer` | NO | `0` |  |
| `break_minutes` | `integer` | NO | `0` |  |
| `submitted_at` | `timestamp with time zone` | YES | - |  |
| `approved_at` | `timestamp with time zone` | YES | - |  |
| `approved_by_user_id` | `integer` | YES | - |  |
| `rejected_reason` | `character varying(400)` | YES | - |  |
| `employee_note` | `character varying(800)` | YES | - |  |
| `admin_note` | `character varying(800)` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.subscription_invoices**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `subscription_invoice_id` | `integer` | NO | `nextval('subscription_invoices_subscription_invoice_id_seq'::regclass)` | **PK** |
| `recurring_profile_id` | `integer` | NO | - | FK -> `recurring_payment_profiles(recurring_profile_id)` |
| `period_start` | `timestamp with time zone` | NO | - |  |
| `period_end` | `timestamp with time zone` | NO | - |  |
| `amount` | `numeric` | NO | - |  |
| `currency` | `character varying(3)` | NO | - |  |
| `status` | `character varying(20)` | NO | `'open'::character varying` |  |
| `transaction_id` | `integer` | YES | - |  |
| `provider_invoice_id` | `character varying(255)` | YES | - |  |
| `attempts` | `integer` | NO | `0` |  |
| `last_attempt_at` | `timestamp with time zone` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.support_ticket_messages**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `support_message_id` | `integer` | NO | `nextval('support_ticket_messages_support_message_id_seq'::regclass)` | **PK** |
| `support_ticket_id` | `integer` | NO | - |  |
| `author_type` | `character varying(24)` | NO | `'agent'::character varying` |  |
| `message` | `text` | NO | - |  |
| `channel` | `character varying(32)` | NO | `'admin'::character varying` |  |
| `internal_note` | `boolean` | NO | `false` |  |
| `created_by_user_id` | `integer` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.support_tickets**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `support_ticket_id` | `integer` | NO | `nextval('support_tickets_support_ticket_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `guest_id` | `integer` | YES | - |  |
| `booking_id` | `integer` | YES | - |  |
| `ticket_number` | `character varying(40)` | NO | - |  |
| `subject` | `character varying(180)` | NO | - |  |
| `description` | `text` | NO | - |  |
| `category` | `character varying(40)` | NO | `'general'::character varying` |  |
| `priority` | `character varying(20)` | NO | `'medium'::character varying` |  |
| `status` | `character varying(24)` | NO | `'open'::character varying` |  |
| `source` | `character varying(32)` | NO | `'admin'::character varying` |  |
| `customer_name` | `character varying(160)` | YES | - |  |
| `customer_email` | `character varying(180)` | YES | - |  |
| `customer_phone` | `character varying(80)` | YES | - |  |
| `assigned_user_id` | `integer` | YES | - |  |
| `sentiment` | `character varying(24)` | NO | `'neutral'::character varying` |  |
| `ai_summary` | `text` | YES | - |  |
| `ai_suggested_reply` | `text` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `last_message_at` | `timestamp with time zone` | YES | - |  |
| `resolved_at` | `timestamp with time zone` | YES | - |  |
| `created_by_user_id` | `integer` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.tax_rates**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `taxRateId` | `integer` | NO | `nextval('"tax_rates_taxRateId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(100)` | NO | - |  |
| `amount` | `numeric` | NO | `0` |  |
| `isDefault` | `boolean` | NO | `false` |  |
| `createdAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updatedAt` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.terminal_sales**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `sale_id` | `character varying(64)` | NO | - | **PK** |
| `terminal_key` | `character varying(120)` | NO | - |  |
| `transaction_id` | `integer` | YES | - |  |
| `amount` | `numeric` | NO | - |  |
| `currency` | `character varying(8)` | NO | `'CAD'::character varying` |  |
| `reference` | `character varying(120)` | YES | - |  |
| `gateway_profile` | `character varying(40)` | YES | - |  |
| `status` | `character varying(20)` | NO | `'waiting'::character varying` |  |
| `result_card` | `character varying(40)` | YES | - |  |
| `expires_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |

### **public.timesheet_edit_requests**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `timesheet_edit_request_id` | `integer` | NO | `nextval('timesheet_edit_requests_timesheet_edit_request_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `user_id` | `integer` | NO | - |  |
| `attendance_event_id` | `integer` | YES | - |  |
| `request_type` | `character varying(16)` | NO | - |  |
| `proposed_event_type` | `character varying(24)` | YES | - |  |
| `proposed_captured_at` | `timestamp with time zone` | YES | - |  |
| `reason` | `character varying(800)` | NO | - |  |
| `status` | `character varying(16)` | NO | `'pending'::character varying` |  |
| `reviewed_by_user_id` | `integer` | YES | - |  |
| `reviewed_at` | `timestamp with time zone` | YES | - |  |
| `decision_note` | `character varying(400)` | YES | - |  |
| `applied_attendance_event_id` | `integer` | YES | - |  |
| `cancelled_at` | `timestamp with time zone` | YES | - |  |
| `metadata` | `jsonb` | NO | `'{}'::jsonb` |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.tip_distribution_shares**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `tip_distribution_share_id` | `integer` | NO | `nextval('tip_distribution_shares_tip_distribution_share_id_seq'::regclass)` | **PK** |
| `tip_distribution_id` | `integer` | NO | - |  |
| `staff_user_id` | `integer` | NO | - |  |
| `amount` | `numeric` | NO | `0` |  |
| `hours_worked` | `numeric` | YES | - |  |
| `notes` | `text` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.tip_distributions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `tip_distribution_id` | `integer` | NO | `nextval('tip_distributions_tip_distribution_id_seq'::regclass)` | **PK** |
| `location_id` | `integer` | NO | - |  |
| `period_start` | `timestamp with time zone` | NO | - |  |
| `period_end` | `timestamp with time zone` | NO | - |  |
| `total_pool_amount` | `numeric` | NO | `0` |  |
| `basis` | `character varying(20)` | NO | - |  |
| `status` | `character varying(20)` | NO | `'draft'::character varying` |  |
| `source_transaction_ids` | `jsonb` | NO | `'[]'::jsonb` |  |
| `created_by_user_id` | `integer` | YES | - |  |
| `finalized_at` | `timestamp with time zone` | YES | - |  |
| `paid_at` | `timestamp with time zone` | YES | - |  |
| `notes` | `text` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.tips**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `tip_id` | `integer` | NO | `nextval('tips_tip_id_seq'::regclass)` | **PK** |
| `booking_id` | `integer` | YES | - |  |
| `payment_transaction_id` | `integer` | YES | - |  |
| `location_id` | `integer` | NO | - |  |
| `amount` | `numeric` | NO | `0` |  |
| `allocation` | `character varying(20)` | YES | - |  |
| `staff_user_id` | `integer` | YES | - |  |
| `recorded_by_user_id` | `integer` | YES | - |  |
| `status` | `character varying(20)` | NO | `'allocated'::character varying` |  |
| `source` | `character varying(20)` | YES | - |  |
| `method` | `character varying(20)` | YES | - |  |
| `currency` | `character varying(3)` | NO | `'CAD'::character varying` |  |
| `tip_distribution_id` | `integer` | YES | - |  |
| `manager_override_audit_id` | `integer` | YES | - |  |
| `idempotency_key` | `character varying(255)` | YES | - |  |
| `metadata` | `jsonb` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |
| `updated_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.tmpcustomers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `customerid` | `text` | YES | - |  |
| `fullname` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `mobile` | `text` | YES | - |  |
| `gender` | `text` | YES | - |  |
| `totalspend` | `text` | YES | - |  |
| `totaldiscount` | `text` | YES | - |  |
| `postcode` | `text` | YES | - |  |
| `postalcode` | `text` | YES | - |  |
| `joineddate` | `text` | YES | - |  |
| `dateofbirth` | `text` | YES | - |  |
| `address` | `text` | YES | - |  |
| `suburb` | `text` | YES | - |  |
| `city` | `text` | YES | - |  |
| `state` | `text` | YES | - |  |
| `acceptmarketing` | `text` | YES | - |  |
| `acceptmarketingsms` | `text` | YES | - |  |
| `lastbookingdate` | `text` | YES | - |  |
| `numberofbooking` | `text` | YES | - |  |
| `spendonlastvisit` | `text` | YES | - |  |
| `location` | `text` | YES | - |  |

### **public.tmpeventbookings**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `comments` | `text` | YES | - |  |
| `posnotes` | `text` | YES | - |  |
| `items` | `text` | YES | - |  |
| `device` | `text` | YES | - |  |
| `product` | `text` | YES | - |  |
| `locations` | `text` | YES | - |  |
| `bookingname` | `text` | YES | - |  |
| `bookingdate` | `text` | YES | - |  |
| `transactiondate` | `text` | YES | - |  |
| `status` | `text` | YES | - |  |
| `firstname` | `text` | YES | - |  |
| `contactname` | `text` | YES | - |  |
| `lastname` | `text` | YES | - |  |
| `sessionstarttime` | `text` | YES | - |  |
| `sessionendtime` | `text` | YES | - |  |
| `cost` | `text` | YES | - |  |
| `balance` | `text` | YES | - |  |
| `customerid` | `text` | YES | - |  |
| `guests` | `text` | YES | - |  |
| `contactnumber` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `purchaselocation` | `text` | YES | - |  |
| `createddate` | `text` | YES | - |  |
| `company` | `text` | YES | - |  |
| `bookingid` | `text` | YES | - |  |
| `manager` | `text` | YES | - |  |
| `location` | `text` | YES | - |  |
| `category` | `text` | YES | - |  |

### **public.tmpwaivers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `signedwaiverid` | `text` | YES | - |  |
| `parentsignedwaiverid` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `firstname` | `text` | YES | - |  |
| `lastname` | `text` | YES | - |  |
| `dateofbirth` | `text` | YES | - |  |
| `phone` | `text` | YES | - |  |
| `signeddate` | `text` | YES | - |  |
| `location` | `text` | YES | - |  |

### **public.uis**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `ui_id` | `integer` | NO | `nextval('permissions_permission_id_seq'::regclass)` | **PK** |
| `name` | `character varying(255)` | NO | - |  |
| `display_name` | `character varying(255)` | NO | - |  |
| `route` | `character varying(255)` | YES | - |  |
| `parent_id` | `integer` | YES | - |  |
| `show_in_sidebar` | `boolean` | YES | `true` |  |
| `status` | `smallint` | NO | `1` |  |
| `icon` | `character varying(255)` | YES | - |  |
| `sort_order` | `integer` | NO | `0` |  |
| `default_ui_id` | `integer` | YES | - | FK -> `uis(ui_id)` |
| `component_key` | `character varying(255)` | YES | - |  |

### **public.user_sessions**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `id` | `integer` | NO | `nextval('user_sessions_id_seq'::regclass)` | **PK** |
| `user_id` | `integer` | NO | - |  |
| `venueId` | `integer` | YES | - |  |
| `session_id` | `character varying(255)` | NO | - |  |
| `jwt_token` | `character varying(255)` | YES | - |  |
| `is_active` | `boolean` | YES | `true` |  |
| `last_active_at` | `timestamp with time zone` | YES | - |  |
| `expires_at` | `timestamp with time zone` | YES | - |  |
| `created_at` | `timestamp with time zone` | NO | `now()` |  |

### **public.users**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `user_id` | `integer` | NO | `nextval('users_user_id_seq'::regclass)` | **PK** |
| `first_name` | `character varying(255)` | NO | - |  |
| `last_name` | `character varying(255)` | NO | - |  |
| `email` | `character varying(255)` | NO | - |  |
| `phone` | `character varying(255)` | YES | - |  |
| `password_hash` | `character varying(255)` | NO | - |  |
| `role_id` | `integer` | NO | - |  |
| `created_at` | `timestamp with time zone` | YES | - |  |
| `is_pos_user` | `boolean` | NO | `false` |  |
| `staff_pin_hash` | `character varying(255)` | YES | - |  |
| `photo_url` | `character varying(255)` | YES | - |  |

### **public.waiver**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `signedwaiverid` | `text` | YES | - |  |
| `parentsignedwaiverid` | `text` | YES | - |  |
| `email` | `text` | YES | - |  |
| `firstname` | `text` | YES | - |  |
| `lastname` | `text` | YES | - |  |
| `dateofbirth` | `date` | YES | - |  |
| `phone` | `text` | YES | - |  |
| `signeddate` | `text` | YES | - |  |
| `location` | `text` | YES | - |  |

### **public.waivers**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `waiverId` | `integer` | NO | `nextval('"waivers_waiverId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - | FK -> `parks(venueId)` |
| `name` | `character varying(255)` | NO | - |  |
| `content` | `text` | NO | - |  |
| `imageUrl` | `text` | YES | - |  |
| `validFor` | `integer` | YES | `365` |  |
| `minimumAge` | `integer` | NO | `18` |  |
| `requireSignature` | `boolean` | NO | `true` |  |
| `includeMinorsByDefault` | `boolean` | NO | `true` |  |
| `showExpiryDate` | `boolean` | YES | `true` |  |
| `sendExpiryReminder` | `boolean` | YES | `false` |  |
| `captureAddress` | `boolean` | YES | `true` |  |
| `captureGender` | `boolean` | YES | `true` |  |
| `useCustomForm` | `boolean` | YES | `false` |  |
| `isActive` | `boolean` | YES | `true` |  |
| `createdAt` | `timestamp with time zone` | NO | `now()` |  |
| `updatedAt` | `timestamp with time zone` | NO | `now()` |  |
| `activeVersionId` | `integer` | YES | - |  |
| `currentVersionNumber` | `integer` | NO | `0` |  |
| `languages` | `jsonb` | NO | `'[]'::jsonb` |  |

### **public.wristbands**
| Column Name | Data Type | Nullable | Default | Constraints / Relations |
| ----------- | --------- | -------- | ------- | ----------------------- |
| `wristbandId` | `integer` | NO | `nextval('"wristbands_wristbandId_seq"'::regclass)` | **PK** |
| `venueId` | `integer` | NO | - |  |
| `name` | `character varying(255)` | NO | - |  |
| `color` | `character varying(255)` | NO | - |  |
| `created_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
| `updated_at` | `timestamp with time zone` | NO | `CURRENT_TIMESTAMP` |  |
