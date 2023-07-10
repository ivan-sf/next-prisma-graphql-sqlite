-- CreateEnum
CREATE TYPE "Enum_Priority" AS ENUM ('VeryImportant', 'Important', 'NotImportant');

-- CreateEnum
CREATE TYPE "Enum_Symbol" AS ENUM ('Green', 'Yellow', 'Red');

-- CreateEnum
CREATE TYPE "Enum_Code" AS ENUM ('NTF', 'M', 'PO', 'EC_S', 'EC_A');

-- CreateEnum
CREATE TYPE "Enum_CollectionStatus" AS ENUM ('CorrectionsNeeded', 'Complete', 'Pending', 'NotApplicable');

-- CreateEnum
CREATE TYPE "Enum_Signature" AS ENUM ('Electronic', 'Scan');

-- CreateEnum
CREATE TYPE "Enum_VisitType" AS ENUM ('SQV', 'SIV', 'IMV', 'RIMV', 'COV');

-- CreateEnum
CREATE TYPE "Enum_Region" AS ENUM ('APAC', 'EUROPE', 'LATAM', 'NORTH_AMERICA', 'OCEANIA');

-- CreateEnum
CREATE TYPE "Enum_Title" AS ENUM ('MR', 'MRS', 'MS', 'DR', 'PROF');

-- CreateEnum
CREATE TYPE "Enum_Responsible" AS ENUM ('Sponsor', 'CogenTech', 'Third_Party');

-- CreateEnum
CREATE TYPE "Enum_BillingUV" AS ENUM ('OneTime', 'PerAudit', 'PerBinder', 'PerDataLock', 'PerDay', 'PerDocument', 'PerDossier', 'PerEditCheck', 'PerEvent', 'PerForm', 'PerHour', 'PerMeeting', 'PerMember', 'PerMonth', 'PerQC', 'PerQuarter', 'PerQuery', 'PerReport', 'PerSet_up', 'PerShipment', 'PerSite', 'PerSite_visit', 'PerStudy', 'PerSubject', 'PerSubmission', 'PerTraining', 'PerTransfer', 'PerUnit', 'PerUpdate', 'PerUser_month', 'PerVisit', 'PerWeek');

-- CreateEnum
CREATE TYPE "Enum_RoleName" AS ENUM ('Admin', 'Client');

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "oauth_token_secret" TEXT,
    "oauth_token" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "route" TEXT NOT NULL,
    "isPublic" BOOLEAN NOT NULL DEFAULT false,
    "imageLink" TEXT,
    "customizable" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RegionPercentage" (
    "id" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "percentage" Float(5,2) NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RegionPercentage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "State" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "stateId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "email" TEXT NOT NULL,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "companyId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "siteNumber" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "cityId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "phone" TEXT,
    "cityId" TEXT NOT NULL,
    "title" "Enum_Title" NOT NULL,
    "address" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "sponsorName" TEXT NOT NULL,
    "studyName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "studyTypeId" TEXT NOT NULL,
    "diseaseTargetMarketId" TEXT NOT NULL,
    "conditionId" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "numberSubjects" INTEGER NOT NULL,
    "numberUsersSponsor" INTEGER NOT NULL,
    "numberUsersClinicalProjectManager" INTEGER NOT NULL,
    "numberUsersClinicalResearchAssociate" INTEGER NOT NULL,
    "numberUsersRegulatory" INTEGER NOT NULL,
    "numberUsersClinicalProjectAssistant" INTEGER NOT NULL,
    "numberUsersThirdParty" INTEGER NOT NULL,
    "numberSitesFeasibility" INTEGER NOT NULL,
    "numberSitesQualification" INTEGER NOT NULL,
    "numberSitesSelection" INTEGER NOT NULL,
    "numberEnrollmentSupport" INTEGER NOT NULL,
    "numberEnrollmentSupportFrequency" INTEGER NOT NULL,
    "siteInitiationPlan" INTEGER NOT NULL,
    "enrollmentSupportSite" INTEGER NOT NULL,
    "imvSite" INTEGER NOT NULL,
    "imvRemote" INTEGER NOT NULL,
    "imvTelephone" INTEGER NOT NULL,
    "startUpPhase" INTEGER NOT NULL,
    "screeningEnrollmentPhase" INTEGER NOT NULL,
    "followUpPhase" INTEGER NOT NULL,
    "closeOutPhase" INTEGER NOT NULL,
    "description" TEXT,
    "rbmPercentageSubjects" Float(5,2),
    "rbmPercentageInformedConReview" Float(5,2),
    "rbmPercentageInclusionCritReview" Float(5,2),
    "rbmPercentageExclusionCritReview" Float(5,2),
    "rbmPercentageEndpointsReview" Float(5,2),
    "rbmPercentageConcomitantsMedReview" Float(5,2),
    "rbmPercentageAdverseEventsReview" Float(5,2),
    "rbmPercentageMajorDevProtReview" Float(5,2),
    "rbmPercentageDevicAccountabilityReview" Float(5,2),
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Condition" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Condition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DiseaseTargetMarket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DiseaseTargetMarket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyDesign" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyDesign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectNews" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectNews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamMembers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "studyMemberStatus" BOOLEAN DEFAULT true,
    "statusLearUpProgramManagementSystem" BOOLEAN NOT NULL,
    "statusLearUpGxPDocumentRepository" TEXT NOT NULL,
    "statusEDC" TEXT NOT NULL,
    "studyStartDate" TIMESTAMP(3) NOT NULL,
    "studyEndDate" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RRActivity" (
    "id" TEXT NOT NULL,
    "responsible" "Enum_Responsible" NOT NULL,
    "departmentId" TEXT NOT NULL,
    "classCostCenterId" TEXT NOT NULL,
    "billingUnitValue" "Enum_BillingUV" NOT NULL,
    "qty" INTEGER NOT NULL,
    "qtyAmendment" INTEGER,
    "acceptanceAmendment" BOOLEAN,
    "totalCostAmendment" INTEGER,
    "totalAdditionalQty" INTEGER,
    "unitCost" Float(5,2) NOT NULL,
    "totalOriginalCost" Float(5,2) NOT NULL,
    "overallTotalEstimatedBudget" Float(5,2) NOT NULL,
    "balanceQty" INTEGER NOT NULL,
    "percentageExecutionQty" Float(5,2) NOT NULL,
    "balanceBudget" Float(5,2) NOT NULL,
    "percentageExecutionBudget" Float(5,2) NOT NULL,
    "userId" TEXT NOT NULL,
    "dedicatedHoursPerMonth" INTEGER NOT NULL,
    "mByMQtyExecution" INTEGER NOT NULL,
    "mByMExecutionPrice" Float(5,2) NOT NULL,
    "mByMQtyForecast" INTEGER NOT NULL,
    "mByMForecastPrice" Float(5,2) NOT NULL,
    "percentageCompleted" Float(5,2) NOT NULL,
    "projectId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RRActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudyRole" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "StudyRole_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MatrixStudyDocuments" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "comments" TEXT,
    "version" TEXT,
    "projectId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MatrixStudyDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "visitReportTrackerId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "matrixStudyDocumentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentFile" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "shareFileUrl" TEXT,
    "smartSheetUrl" TEXT,
    "documentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DocumentFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationRequest" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitReportTracker" (
    "id" TEXT NOT NULL,
    "siteNumber" TEXT NOT NULL,
    "siteName" TEXT NOT NULL,
    "piLastName" TEXT NOT NULL,
    "craName" TEXT NOT NULL,
    "visitType" "Enum_VisitType" NOT NULL,
    "visitNumber" INTEGER,
    "confirmationLetterDate" TIMESTAMP(3) NOT NULL,
    "visitStartDate" TIMESTAMP(3) NOT NULL,
    "visitEndDate" TIMESTAMP(3) NOT NULL,
    "submitToCPMDeadlineDate" TIMESTAMP(3) NOT NULL,
    "daysToSubmit" INTEGER NOT NULL,
    "cpmReviewFinalizationDate" TIMESTAMP(3) NOT NULL,
    "visitReportDeadlineDate" TIMESTAMP(3) NOT NULL,
    "comments" TEXT,
    "visitReportFinalizationDate" TIMESTAMP(3) NOT NULL,
    "daysToDeadline" INTEGER NOT NULL,
    "projectId" TEXT NOT NULL,
    "followUpLetterDate" TIMESTAMP(3) NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VisitReportTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TMFsTracker" (
    "id" TEXT NOT NULL,
    "zoneNumber" TEXT NOT NULL,
    "sectionNumber" TEXT NOT NULL,
    "artifactNumber" TEXT NOT NULL,
    "code" "Enum_Code",
    "codeNumber" TEXT,
    "documentName" TEXT NOT NULL,
    "versionNumber" TEXT NOT NULL,
    "documentDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3),
    "daysToExpire" TIMESTAMP(3),
    "collectionStatus" "Enum_CollectionStatus" NOT NULL,
    "inTMF" BOOLEAN NOT NULL DEFAULT false,
    "signature" "Enum_Signature" NOT NULL,
    "link" TEXT NOT NULL,
    "comments" TEXT,
    "siteId" TEXT,
    "today" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "regBinder" BOOLEAN DEFAULT false,
    "imv" BOOLEAN DEFAULT false,
    "projectId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TMFsTracker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SiteRegulatoryBinder" (
    "id" TEXT NOT NULL,
    "notApplicable" BOOLEAN DEFAULT false,
    "percentageComplete" Float(5,2) NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "cpaCpaSiteComplete" "Enum_Symbol" NOT NULL DEFAULT 'Red',
    "cpaCpaSiteUpload" BOOLEAN NOT NULL,
    "cogentechQC" "Enum_Symbol" NOT NULL DEFAULT 'Red',
    "cogentechQCApproved" BOOLEAN NOT NULL DEFAULT false,
    "statusTMF" "Enum_Symbol" NOT NULL DEFAULT 'Red',
    "filledInTMF" BOOLEAN,
    "projectId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteRegulatoryBinder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MeetingMinutes" (
    "id" TEXT NOT NULL,
    "done" BOOLEAN DEFAULT false,
    "followUp" BOOLEAN DEFAULT false,
    "meetingTopic" TEXT NOT NULL,
    "description" TEXT,
    "ownerId" TEXT NOT NULL,
    "priority" "Enum_Priority" NOT NULL DEFAULT 'Important',
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "otherNotes" TEXT,
    "projectId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "updatedById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MeetingMinutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClassCostCenter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClassCostCenter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PageToRole" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StudyDesignOfProject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProjectToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_Attendees" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Page_name_key" ON "Page"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Page_route_key" ON "Page"("route");

-- CreateIndex
CREATE UNIQUE INDEX "Role_name_key" ON "Role"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Region_code_key" ON "Region"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE UNIQUE INDEX "State_code_key" ON "State"("code");

-- CreateIndex
CREATE UNIQUE INDEX "City_code_key" ON "City"("code");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "RRActivity_projectId_key" ON "RRActivity"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "MatrixStudyDocuments_projectId_key" ON "MatrixStudyDocuments"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "Document_name_key" ON "Document"("name");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_token_key" ON "VerificationRequest"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationRequest_identifier_token_key" ON "VerificationRequest"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "VisitReportTracker_projectId_key" ON "VisitReportTracker"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "TMFsTracker_artifactNumber_key" ON "TMFsTracker"("artifactNumber");

-- CreateIndex
CREATE UNIQUE INDEX "_PageToRole_AB_unique" ON "_PageToRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PageToRole_B_index" ON "_PageToRole"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StudyDesignOfProject_AB_unique" ON "_StudyDesignOfProject"("A", "B");

-- CreateIndex
CREATE INDEX "_StudyDesignOfProject_B_index" ON "_StudyDesignOfProject"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProjectToService_AB_unique" ON "_ProjectToService"("A", "B");

-- CreateIndex
CREATE INDEX "_ProjectToService_B_index" ON "_ProjectToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Attendees_AB_unique" ON "_Attendees"("A", "B");

-- CreateIndex
CREATE INDEX "_Attendees_B_index" ON "_Attendees"("B");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionPercentage" ADD CONSTRAINT "RegionPercentage_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RegionPercentage" ADD CONSTRAINT "RegionPercentage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "State" ADD CONSTRAINT "State_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "City" ADD CONSTRAINT "City_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_studyTypeId_fkey" FOREIGN KEY ("studyTypeId") REFERENCES "StudyType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_diseaseTargetMarketId_fkey" FOREIGN KEY ("diseaseTargetMarketId") REFERENCES "DiseaseTargetMarket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_conditionId_fkey" FOREIGN KEY ("conditionId") REFERENCES "Condition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectNews" ADD CONSTRAINT "ProjectNews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectNews" ADD CONSTRAINT "ProjectNews_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "StudyRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamMembers" ADD CONSTRAINT "TeamMembers_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_classCostCenterId_fkey" FOREIGN KEY ("classCostCenterId") REFERENCES "ClassCostCenter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RRActivity" ADD CONSTRAINT "RRActivity_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatrixStudyDocuments" ADD CONSTRAINT "MatrixStudyDocuments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatrixStudyDocuments" ADD CONSTRAINT "MatrixStudyDocuments_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MatrixStudyDocuments" ADD CONSTRAINT "MatrixStudyDocuments_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "TeamMembers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_visitReportTrackerId_fkey" FOREIGN KEY ("visitReportTrackerId") REFERENCES "VisitReportTracker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_matrixStudyDocumentId_fkey" FOREIGN KEY ("matrixStudyDocumentId") REFERENCES "MatrixStudyDocuments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentFile" ADD CONSTRAINT "DocumentFile_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitReportTracker" ADD CONSTRAINT "VisitReportTracker_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitReportTracker" ADD CONSTRAINT "VisitReportTracker_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitReportTracker" ADD CONSTRAINT "VisitReportTracker_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMFsTracker" ADD CONSTRAINT "TMFsTracker_siteId_fkey" FOREIGN KEY ("siteId") REFERENCES "VisitReportTracker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMFsTracker" ADD CONSTRAINT "TMFsTracker_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMFsTracker" ADD CONSTRAINT "TMFsTracker_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TMFsTracker" ADD CONSTRAINT "TMFsTracker_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteRegulatoryBinder" ADD CONSTRAINT "SiteRegulatoryBinder_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteRegulatoryBinder" ADD CONSTRAINT "SiteRegulatoryBinder_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SiteRegulatoryBinder" ADD CONSTRAINT "SiteRegulatoryBinder_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMinutes" ADD CONSTRAINT "MeetingMinutes_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "TeamMembers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMinutes" ADD CONSTRAINT "MeetingMinutes_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMinutes" ADD CONSTRAINT "MeetingMinutes_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MeetingMinutes" ADD CONSTRAINT "MeetingMinutes_updatedById_fkey" FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToRole" ADD CONSTRAINT "_PageToRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PageToRole" ADD CONSTRAINT "_PageToRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Role"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RoleToUser" ADD CONSTRAINT "_RoleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudyDesignOfProject" ADD CONSTRAINT "_StudyDesignOfProject_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudyDesignOfProject" ADD CONSTRAINT "_StudyDesignOfProject_B_fkey" FOREIGN KEY ("B") REFERENCES "StudyDesign"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToService" ADD CONSTRAINT "_ProjectToService_A_fkey" FOREIGN KEY ("A") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToService" ADD CONSTRAINT "_ProjectToService_B_fkey" FOREIGN KEY ("B") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Attendees" ADD CONSTRAINT "_Attendees_A_fkey" FOREIGN KEY ("A") REFERENCES "MeetingMinutes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Attendees" ADD CONSTRAINT "_Attendees_B_fkey" FOREIGN KEY ("B") REFERENCES "TeamMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
