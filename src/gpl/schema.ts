import { gql } from 'apollo-server';

const typeDefs = gql`
  
enum Enum_Priority {
  VeryImportant
  Important
  NotImportant
}
  

enum Enum_Symbol {
  Green
  Yellow
  Red
}
  

enum Enum_Code {
  NTF
  M
  PO
  EC_S
  EC_A
}
  

enum Enum_CollectionStatus {
  CorrectionsNeeded
  Complete
  Pending
  NotApplicable
}
  

enum Enum_Signature {
  Electronic
  Scan
}
  

enum Enum_VisitType {
  SQV
  SIV
  IMV
  RIMV
  COV
}
  

enum Enum_Region {
  APAC
  EUROPE
  LATAM
  NORTH_AMERICA
  OCEANIA
}
  

enum Enum_Title {
  MR
  MRS
  MS
  DR
  PROF
}
  

enum Enum_Responsible {
  Sponsor
  CogenTech
  Third_Party
}
  

enum Enum_BillingUV {
  OneTime
  PerAudit
  PerBinder
  PerDataLock
  PerDay
  PerDocument
  PerDossier
  PerEditCheck
  PerEvent
  PerForm
  PerHour
  PerMeeting
  PerMember
  PerMonth
  PerQC
  PerQuarter
  PerQuery
  PerReport
  PerSet_up
  PerShipment
  PerSite
  PerSite_visit
  PerStudy
  PerSubject
  PerSubmission
  PerTraining
  PerTransfer
  PerUnit
  PerUpdate
  PerUser_month
  PerVisit
  PerWeek
}
  

enum Enum_RoleName {
  Admin
  Client
}
  
  
  
  #--------------------------Account-----------------------
  type Account{
    id: ID!,userId: String!,type: String!,provider: String!,providerAccountId: String!,refresh_token: String,access_token: String,expires_at: Int,token_type: String,scope: String,id_token: String,session_state: String,oauth_token_secret: String,oauth_token: String,user: User!
  }
  input AccountCreateInput{
    userId: String!,type: String!,provider: String!,providerAccountId: String!,refresh_token: String,access_token: String,expires_at: Int,token_type: String,scope: String,id_token: String,session_state: String,oauth_token_secret: String,oauth_token: String
  }
  input AccountWhereUniqueInput{
    id:String!
  }
  input AccountUpdateInput{
  userId: String,type: String,provider: String,providerAccountId: String,refresh_token: String,access_token: String,expires_at: Int,token_type: String,scope: String,id_token: String,session_state: String,oauth_token_secret: String,oauth_token: String
  }
  ,
  #--------------------------Page-----------------------
  type Page{
    id: ID!,name: String!,route: String!,isPublic: Boolean!,imageLink: String,customizable: Boolean!,roles: [Role],createdAt: String!,updatedAt: String!
  }
  input PageCreateInput{
    name: String!,route: String!,imageLink: String
  }
  input PageWhereUniqueInput{
    id:String!
  }
  input PageUpdateInput{
  name: String,route: String,isPublic: Boolean,imageLink: String,customizable: Boolean
  }
  ,
  #--------------------------Role-----------------------
  type Role{
    id: ID!,name: String!,pages: [Page],icon: String,users: [User],createdAt: String!,updatedAt: String!
  }
  input RoleCreateInput{
    name: String!,icon: String
  }
  input RoleWhereUniqueInput{
    id:String!
  }
  input RoleUpdateInput{
  name: String,icon: String
  }
  ,
  #--------------------------Session-----------------------
  type Session{
    id: ID!,sessionToken: String!,userId: String!,expires: String!,user: User!
  }
  input SessionCreateInput{
    sessionToken: String!,userId: String!,expires: String!
  }
  input SessionWhereUniqueInput{
    id:String!
  }
  input SessionUpdateInput{
  sessionToken: String,userId: String,expires: String
  }
  ,
  #--------------------------Region-----------------------
  type Region{
    id: ID!,name: String!,code: String!,countries: [Country],regionsPercentage: [RegionPercentage],createdAt: String!,updatedAt: String!
  }
  input RegionCreateInput{
    name: String!,code: String!
  }
  input RegionWhereUniqueInput{
    id:String!
  }
  input RegionUpdateInput{
  name: String,code: String
  }
  ,
  #--------------------------RegionPercentage-----------------------
  type RegionPercentage{
    id: ID!,region: Region!,regionId: String!,percentage: Float!,project: Project!,projectId: String!,createdAt: String!,updatedAt: String!
  }
  input RegionPercentageCreateInput{
    regionId: String!,percentage: Float!,projectId: String!
  }
  input RegionPercentageWhereUniqueInput{
    id:String!
  }
  input RegionPercentageUpdateInput{
  regionId: String,percentage: Float,projectId: String
  }
  ,
  #--------------------------Country-----------------------
  type Country{
    id: ID!,name: String!,code: String!,states: [State],region: Region!,regionId: String!,createdAt: String!,updatedAt: String!
  }
  input CountryCreateInput{
    name: String!,code: String!,regionId: String!
  }
  input CountryWhereUniqueInput{
    id:String!
  }
  input CountryUpdateInput{
  name: String,code: String,regionId: String
  }
  ,
  #--------------------------State-----------------------
  type State{
    id: ID!,name: String!,code: String!,cities: [City],country: Country!,countryId: String!,createdAt: String!,updatedAt: String!
  }
  input StateCreateInput{
    name: String!,code: String!,countryId: String!
  }
  input StateWhereUniqueInput{
    id:String!
  }
  input StateUpdateInput{
  name: String,code: String,countryId: String
  }
  ,
  #--------------------------City-----------------------
  type City{
    id: ID!,name: String!,code: String!,state: State!,stateId: String!,Company: [Company],Profile: [Profile],createdAt: String!,updatedAt: String!
  }
  input CityCreateInput{
    name: String!,code: String!,stateId: String!
  }
  input CityWhereUniqueInput{
    id:String!
  }
  input CityUpdateInput{
  name: String,code: String,stateId: String
  }
  ,
  #--------------------------User-----------------------
  type User{
    id: ID!,deleted: Boolean!,enabled: Boolean!,email: String!,emailVerified: String,image: String,company: Company!,companyId: String!,firstName: String!,lastName: String!,profile: Profile,siteNumber: String,projectNews: [ProjectNews],teamMemberOf: [TeamMembers],roles: [Role],accounts: [Account],sessions: [Session],membersCreatedBy: [TeamMembers],membersUpdatedBy: [TeamMembers],projectsCreatedBy: [Project],projectsUpdatedBy: [Project],rrActivitiesAssignedTo: [RRActivity],rrActivitiesCreatedBy: [RRActivity],rrActivitiesUpdatedBy: [RRActivity],meetingsCreatedBy: [MeetingMinutes],meetingsUpdatedBy: [MeetingMinutes],sitesRegulatoryBinderCreated: [SiteRegulatoryBinder],sitesRegulatoryBinderUpdated: [SiteRegulatoryBinder],matrixStudyDocumentsCreatedBy: [MatrixStudyDocuments],matrixStudyDocumentsUpdatedBy: [MatrixStudyDocuments],visitsReportTrackerCreatedBy: [VisitReportTracker],visitsReportTrackerUpdatedBy: [VisitReportTracker],tmfsTrackersCreatedBy: [TMFsTracker],tmfsTrackersUpdatedBy: [TMFsTracker],createdAt: String!,updatedAt: String!
  }
  input UserCreateInput{
    email: String!,emailVerified: String,image: String,companyId: String!,firstName: String!,lastName: String!,siteNumber: String
  }
  input UserWhereUniqueInput{
    id:String!
  }
  input UserUpdateInput{
  deleted: Boolean,enabled: Boolean,email: String,emailVerified: String,image: String,companyId: String,firstName: String,lastName: String,siteNumber: String
  }
  ,
  #--------------------------Company-----------------------
  type Company{
    id: ID!,name: String!,address: String,projects: [Project],city: City!,cityId: String!,User: [User],createdAt: String!,updatedAt: String!
  }
  input CompanyCreateInput{
    name: String!,address: String,cityId: String!
  }
  input CompanyWhereUniqueInput{
    id:String!
  }
  input CompanyUpdateInput{
  name: String,address: String,cityId: String
  }
  ,
  #--------------------------Profile-----------------------
  type Profile{
    id: ID!,phone: String,city: City!,cityId: String!,title: Enum_Title!,address: String,user: User!,userId: String!,createdAt: String!,updatedAt: String!
  }
  input ProfileCreateInput{
    phone: String,cityId: String!,title: Enum_Title!,address: String,userId: String!
  }
  input ProfileWhereUniqueInput{
    id:String!
  }
  input ProfileUpdateInput{
  phone: String,cityId: String,title: Enum_Title,address: String,userId: String
  }
  ,
  #--------------------------Project-----------------------
  type Project{
    id: ID!,sponsorName: String!,studyName: String!,firstName: String!,lastName: String!,email: String!,country: String!,phone: String!,studyDesign: [StudyDesign],studyType: StudyType!,studyTypeId: String!,diseaseTargetMarket: DiseaseTargetMarket!,diseaseTargetMarketId: String!,condition: Condition!,conditionId: String!,services: [Service],company: Company!,companyId: String!,regionDistribution: [RegionPercentage],numberSubjects: Int!,numberUsersSponsor: Int!,numberUsersClinicalProjectManager: Int!,numberUsersClinicalResearchAssociate: Int!,numberUsersRegulatory: Int!,numberUsersClinicalProjectAssistant: Int!,numberUsersThirdParty: Int!,numberSitesFeasibility: Int!,numberSitesQualification: Int!,numberSitesSelection: Int!,numberEnrollmentSupport: Int!,numberEnrollmentSupportFrequency: Int!,siteInitiationPlan: Int!,enrollmentSupportSite: Int!,imvSite: Int!,imvRemote: Int!,imvTelephone: Int!,startUpPhase: Int!,screeningEnrollmentPhase: Int!,followUpPhase: Int!,closeOutPhase: Int!,projectNews: [ProjectNews],description: String,members: [TeamMembers],rbmPercentageSubjects: Float,rbmPercentageInformedConReview: Float,rbmPercentageInclusionCritReview: Float,rbmPercentageExclusionCritReview: Float,rbmPercentageEndpointsReview: Float,rbmPercentageConcomitantsMedReview: Float,rbmPercentageAdverseEventsReview: Float,rbmPercentageMajorDevProtReview: Float,rbmPercentageDevicAccountabilityReview: Float,rrActivity: RRActivity,matrixStudyDocument: MatrixStudyDocuments,visitReportTracker: VisitReportTracker,tmfsTrackers: [TMFsTracker],sitesRegulatoryBinder: [SiteRegulatoryBinder],meetingMinutes: [MeetingMinutes],createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input ProjectCreateInput{
    sponsorName: String!,studyName: String!,firstName: String!,lastName: String!,email: String!,country: String!,phone: String!,studyTypeId: String!,diseaseTargetMarketId: String!,conditionId: String!,companyId: String!,numberSubjects: Int!,numberUsersSponsor: Int!,numberUsersClinicalProjectManager: Int!,numberUsersClinicalResearchAssociate: Int!,numberUsersRegulatory: Int!,numberUsersClinicalProjectAssistant: Int!,numberUsersThirdParty: Int!,numberSitesFeasibility: Int!,numberSitesQualification: Int!,numberSitesSelection: Int!,numberEnrollmentSupport: Int!,numberEnrollmentSupportFrequency: Int!,siteInitiationPlan: Int!,enrollmentSupportSite: Int!,imvSite: Int!,imvRemote: Int!,imvTelephone: Int!,startUpPhase: Int!,screeningEnrollmentPhase: Int!,followUpPhase: Int!,closeOutPhase: Int!,description: String,rbmPercentageSubjects: Float,rbmPercentageInformedConReview: Float,rbmPercentageInclusionCritReview: Float,rbmPercentageExclusionCritReview: Float,rbmPercentageEndpointsReview: Float,rbmPercentageConcomitantsMedReview: Float,rbmPercentageAdverseEventsReview: Float,rbmPercentageMajorDevProtReview: Float,rbmPercentageDevicAccountabilityReview: Float,createdById: String!,updatedById: String!
  }
  input ProjectWhereUniqueInput{
    id:String!
  }
  input ProjectUpdateInput{
  sponsorName: String,studyName: String,firstName: String,lastName: String,email: String,country: String,phone: String,studyTypeId: String,diseaseTargetMarketId: String,conditionId: String,companyId: String,numberSubjects: Int,numberUsersSponsor: Int,numberUsersClinicalProjectManager: Int,numberUsersClinicalResearchAssociate: Int,numberUsersRegulatory: Int,numberUsersClinicalProjectAssistant: Int,numberUsersThirdParty: Int,numberSitesFeasibility: Int,numberSitesQualification: Int,numberSitesSelection: Int,numberEnrollmentSupport: Int,numberEnrollmentSupportFrequency: Int,siteInitiationPlan: Int,enrollmentSupportSite: Int,imvSite: Int,imvRemote: Int,imvTelephone: Int,startUpPhase: Int,screeningEnrollmentPhase: Int,followUpPhase: Int,closeOutPhase: Int,description: String,rbmPercentageSubjects: Float,rbmPercentageInformedConReview: Float,rbmPercentageInclusionCritReview: Float,rbmPercentageExclusionCritReview: Float,rbmPercentageEndpointsReview: Float,rbmPercentageConcomitantsMedReview: Float,rbmPercentageAdverseEventsReview: Float,rbmPercentageMajorDevProtReview: Float,rbmPercentageDevicAccountabilityReview: Float,createdById: String,updatedById: String
  }
  ,
  #--------------------------Condition-----------------------
  type Condition{
    id: ID!,name: String!,level: Int!,enabled: Boolean!,projects: [Project],createdAt: String!,updatedAt: String!
  }
  input ConditionCreateInput{
    name: String!,level: Int!
  }
  input ConditionWhereUniqueInput{
    id:String!
  }
  input ConditionUpdateInput{
  name: String,level: Int,enabled: Boolean
  }
  ,
  #--------------------------DiseaseTargetMarket-----------------------
  type DiseaseTargetMarket{
    id: ID!,name: String!,level: Int!,enabled: Boolean!,projects: [Project],createdAt: String!,updatedAt: String!
  }
  input DiseaseTargetMarketCreateInput{
    name: String!,level: Int!
  }
  input DiseaseTargetMarketWhereUniqueInput{
    id:String!
  }
  input DiseaseTargetMarketUpdateInput{
  name: String,level: Int,enabled: Boolean
  }
  ,
  #--------------------------StudyType-----------------------
  type StudyType{
    id: ID!,name: String!,level: Int!,enabled: Boolean!,projects: [Project],createdAt: String!,updatedAt: String!
  }
  input StudyTypeCreateInput{
    name: String!,level: Int!
  }
  input StudyTypeWhereUniqueInput{
    id:String!
  }
  input StudyTypeUpdateInput{
  name: String,level: Int,enabled: Boolean
  }
  ,
  #--------------------------StudyDesign-----------------------
  type StudyDesign{
    id: ID!,name: String!,level: Int!,enabled: Boolean!,projects: [Project],createdAt: String!,updatedAt: String!
  }
  input StudyDesignCreateInput{
    name: String!,level: Int!
  }
  input StudyDesignWhereUniqueInput{
    id:String!
  }
  input StudyDesignUpdateInput{
  name: String,level: Int,enabled: Boolean
  }
  ,
  #--------------------------Service-----------------------
  type Service{
    id: ID!,name: String!,level: Int!,enabled: Boolean!,projects: [Project],createdAt: String!,updatedAt: String!
  }
  input ServiceCreateInput{
    name: String!,level: Int!
  }
  input ServiceWhereUniqueInput{
    id:String!
  }
  input ServiceUpdateInput{
  name: String,level: Int,enabled: Boolean
  }
  ,
  #--------------------------ProjectNews-----------------------
  type ProjectNews{
    id: ID!,comment: String!,user: User!,userId: String!,project: Project!,projectId: String!,createdAt: String!,updatedAt: String!
  }
  input ProjectNewsCreateInput{
    comment: String!,userId: String!,projectId: String!
  }
  input ProjectNewsWhereUniqueInput{
    id:String!
  }
  input ProjectNewsUpdateInput{
  comment: String,userId: String,projectId: String
  }
  ,
  #--------------------------TeamMembers-----------------------
  type TeamMembers{
    id: ID!,user: User!,userId: String!,project: Project!,projectId: String!,position: StudyRole!,positionId: String!,studyMemberStatus: Boolean,statusLearUpProgramManagementSystem: Boolean!,statusLearUpGxPDocumentRepository: String!,statusEDC: String!,studyStartDate: String!,studyEndDate: String!,notifications: [Notification],ownerMeetings: [MeetingMinutes],attendeesMeetings: [MeetingMinutes],createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input TeamMembersCreateInput{
    userId: String!,projectId: String!,positionId: String!,statusLearUpProgramManagementSystem: Boolean!,statusLearUpGxPDocumentRepository: String!,statusEDC: String!,studyStartDate: String!,studyEndDate: String!,createdById: String!,updatedById: String!
  }
  input TeamMembersWhereUniqueInput{
    id:String!
  }
  input TeamMembersUpdateInput{
  userId: String,projectId: String,positionId: String,studyMemberStatus: Boolean,statusLearUpProgramManagementSystem: Boolean,statusLearUpGxPDocumentRepository: String,statusEDC: String,studyStartDate: String,studyEndDate: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------RRActivity-----------------------
  type RRActivity{
    id: ID!,responsible: Enum_Responsible!,department: Department!,departmentId: String!,classCostCenter: ClassCostCenter!,classCostCenterId: String!,billingUnitValue: Enum_BillingUV!,qty: Int!,qtyAmendment: Int,acceptanceAmendment: Boolean,totalCostAmendment: Int,totalAdditionalQty: Int,unitCost: Float!,totalOriginalCost: Float!,overallTotalEstimatedBudget: Float!,balanceQty: Int!,percentageExecutionQty: Float!,balanceBudget: Float!,percentageExecutionBudget: Float!,assignedTo: User!,userId: String!,dedicatedHoursPerMonth: Int!,mByMQtyExecution: Int!,mByMExecutionPrice: Float!,mByMQtyForecast: Int!,mByMForecastPrice: Float!,percentageCompleted: Float!,project: Project!,projectId: String!,createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input RRActivityCreateInput{
    responsible: Enum_Responsible!,departmentId: String!,classCostCenterId: String!,billingUnitValue: Enum_BillingUV!,qty: Int!,qtyAmendment: Int,acceptanceAmendment: Boolean,totalCostAmendment: Int,totalAdditionalQty: Int,unitCost: Float!,totalOriginalCost: Float!,overallTotalEstimatedBudget: Float!,balanceQty: Int!,percentageExecutionQty: Float!,balanceBudget: Float!,percentageExecutionBudget: Float!,userId: String!,dedicatedHoursPerMonth: Int!,mByMQtyExecution: Int!,mByMExecutionPrice: Float!,mByMQtyForecast: Int!,mByMForecastPrice: Float!,percentageCompleted: Float!,projectId: String!,createdById: String!,updatedById: String!
  }
  input RRActivityWhereUniqueInput{
    id:String!
  }
  input RRActivityUpdateInput{
  responsible: Enum_Responsible,departmentId: String,classCostCenterId: String,billingUnitValue: Enum_BillingUV,qty: Int,qtyAmendment: Int,acceptanceAmendment: Boolean,totalCostAmendment: Int,totalAdditionalQty: Int,unitCost: Float,totalOriginalCost: Float,overallTotalEstimatedBudget: Float,balanceQty: Int,percentageExecutionQty: Float,balanceBudget: Float,percentageExecutionBudget: Float,userId: String,dedicatedHoursPerMonth: Int,mByMQtyExecution: Int,mByMExecutionPrice: Float,mByMQtyForecast: Int,mByMForecastPrice: Float,percentageCompleted: Float,projectId: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------StudyRole-----------------------
  type StudyRole{
    id: ID!,name: String!,studyRoleUsers: [TeamMembers],createdAt: String!,updatedAt: String!
  }
  input StudyRoleCreateInput{
    name: String!
  }
  input StudyRoleWhereUniqueInput{
    id:String!
  }
  input StudyRoleUpdateInput{
  name: String
  }
  ,
  #--------------------------MatrixStudyDocuments-----------------------
  type MatrixStudyDocuments{
    id: ID!,category: String!,comments: String,version: String,documents: [Document],project: Project!,projectId: String!,createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input MatrixStudyDocumentsCreateInput{
    category: String!,comments: String,version: String,projectId: String!,createdById: String!,updatedById: String!
  }
  input MatrixStudyDocumentsWhereUniqueInput{
    id:String!
  }
  input MatrixStudyDocumentsUpdateInput{
  category: String,comments: String,version: String,projectId: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------Notification-----------------------
  type Notification{
    id: ID!,message: String!,user: TeamMembers!,userId: String!,visitReportTracker: VisitReportTracker!,visitReportTrackerId: String!,createdAt: String!,updatedAt: String!
  }
  input NotificationCreateInput{
    message: String!,userId: String!,visitReportTrackerId: String!
  }
  input NotificationWhereUniqueInput{
    id:String!
  }
  input NotificationUpdateInput{
  message: String,userId: String,visitReportTrackerId: String
  }
  ,
  #--------------------------Document-----------------------
  type Document{
    id: ID!,name: String!,files: [DocumentFile],matrixStudyDocument: MatrixStudyDocuments!,matrixStudyDocumentId: String!,createdAt: String!,updatedAt: String!
  }
  input DocumentCreateInput{
    name: String!,matrixStudyDocumentId: String!
  }
  input DocumentWhereUniqueInput{
    id:String!
  }
  input DocumentUpdateInput{
  name: String,matrixStudyDocumentId: String
  }
  ,
  #--------------------------DocumentFile-----------------------
  type DocumentFile{
    id: ID!,name: String!,type: String!,url: String!,shareFileUrl: String,smartSheetUrl: String,document: Document!,documentId: String!,createdAt: String!,updatedAt: String!
  }
  input DocumentFileCreateInput{
    name: String!,type: String!,url: String!,shareFileUrl: String,smartSheetUrl: String,documentId: String!
  }
  input DocumentFileWhereUniqueInput{
    id:String!
  }
  input DocumentFileUpdateInput{
  name: String,type: String,url: String,shareFileUrl: String,smartSheetUrl: String,documentId: String
  }
  ,
  #--------------------------VerificationRequest-----------------------
  type VerificationRequest{
    id: ID!,identifier: String!,token: String!,expires: String!,createdAt: String!,updatedAt: String!
  }
  input VerificationRequestCreateInput{
    identifier: String!,token: String!,expires: String!
  }
  input VerificationRequestWhereUniqueInput{
    id:String!
  }
  input VerificationRequestUpdateInput{
  identifier: String,token: String,expires: String
  }
  ,
  #--------------------------VisitReportTracker-----------------------
  type VisitReportTracker{
    id: ID!,siteNumber: String!,siteName: String!,piLastName: String!,craName: String!,teamNotifications: [Notification],visitType: Enum_VisitType!,visitNumber: Int,confirmationLetterDate: String!,visitStartDate: String!,visitEndDate: String!,submitToCPMDeadlineDate: String!,daysToSubmit: Int!,cpmReviewFinalizationDate: String!,visitReportDeadlineDate: String!,comments: String,visitReportFinalizationDate: String!,daysToDeadline: Int!,project: Project!,projectId: String!,followUpLetterDate: String!,tmfsTrackers: [TMFsTracker],createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input VisitReportTrackerCreateInput{
    siteNumber: String!,siteName: String!,piLastName: String!,craName: String!,visitType: Enum_VisitType!,visitNumber: Int,confirmationLetterDate: String!,visitStartDate: String!,visitEndDate: String!,submitToCPMDeadlineDate: String!,daysToSubmit: Int!,cpmReviewFinalizationDate: String!,visitReportDeadlineDate: String!,comments: String,visitReportFinalizationDate: String!,daysToDeadline: Int!,projectId: String!,followUpLetterDate: String!,createdById: String!,updatedById: String!
  }
  input VisitReportTrackerWhereUniqueInput{
    id:String!
  }
  input VisitReportTrackerUpdateInput{
  siteNumber: String,siteName: String,piLastName: String,craName: String,visitType: Enum_VisitType,visitNumber: Int,confirmationLetterDate: String,visitStartDate: String,visitEndDate: String,submitToCPMDeadlineDate: String,daysToSubmit: Int,cpmReviewFinalizationDate: String,visitReportDeadlineDate: String,comments: String,visitReportFinalizationDate: String,daysToDeadline: Int,projectId: String,followUpLetterDate: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------TMFsTracker-----------------------
  type TMFsTracker{
    id: ID!,zoneNumber: String!,sectionNumber: String!,artifactNumber: String!,code: Enum_Code,codeNumber: String,documentName: String!,versionNumber: String!,documentDate: String!,expirationDate: String,daysToExpire: String,collectionStatus: Enum_CollectionStatus!,inTMF: Boolean!,signature: Enum_Signature!,link: String!,comments: String,site: VisitReportTracker,siteId: String,today: String!,regBinder: Boolean,imv: Boolean,projectId: String!,project: Project!,createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input TMFsTrackerCreateInput{
    zoneNumber: String!,sectionNumber: String!,artifactNumber: String!,code: Enum_Code,codeNumber: String,documentName: String!,versionNumber: String!,documentDate: String!,expirationDate: String,daysToExpire: String,collectionStatus: Enum_CollectionStatus!,signature: Enum_Signature!,link: String!,comments: String,siteId: String,projectId: String!,createdById: String!,updatedById: String!
  }
  input TMFsTrackerWhereUniqueInput{
    id:String!
  }
  input TMFsTrackerUpdateInput{
  zoneNumber: String,sectionNumber: String,artifactNumber: String,code: Enum_Code,codeNumber: String,documentName: String,versionNumber: String,documentDate: String,expirationDate: String,daysToExpire: String,collectionStatus: Enum_CollectionStatus,inTMF: Boolean,signature: Enum_Signature,link: String,comments: String,siteId: String,today: String,regBinder: Boolean,imv: Boolean,projectId: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------SiteRegulatoryBinder-----------------------
  type SiteRegulatoryBinder{
    id: ID!,notApplicable: Boolean,percentageComplete: Float!,description: String!,date: String,cpaCpaSiteComplete: Enum_Symbol!,cpaCpaSiteUpload: Boolean!,cogentechQC: Enum_Symbol!,cogentechQCApproved: Boolean!,statusTMF: Enum_Symbol!,filledInTMF: Boolean,project: Project!,projectId: String!,createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input SiteRegulatoryBinderCreateInput{
    percentageComplete: Float!,description: String!,date: String,cpaCpaSiteUpload: Boolean!,filledInTMF: Boolean,projectId: String!,createdById: String!,updatedById: String!
  }
  input SiteRegulatoryBinderWhereUniqueInput{
    id:String!
  }
  input SiteRegulatoryBinderUpdateInput{
  notApplicable: Boolean,percentageComplete: Float,description: String,date: String,cpaCpaSiteComplete: Enum_Symbol,cpaCpaSiteUpload: Boolean,cogentechQC: Enum_Symbol,cogentechQCApproved: Boolean,statusTMF: Enum_Symbol,filledInTMF: Boolean,projectId: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------MeetingMinutes-----------------------
  type MeetingMinutes{
    id: ID!,done: Boolean,followUp: Boolean,meetingTopic: String!,description: String,owner: TeamMembers!,ownerId: String!,priority: Enum_Priority!,start: String!,end: String!,otherNotes: String,attendees: [TeamMembers],projectId: String!,project: Project!,createdBy: User!,createdById: String!,updatedBy: User!,updatedById: String!,createdAt: String!,updatedAt: String!
  }
  input MeetingMinutesCreateInput{
    meetingTopic: String!,description: String,ownerId: String!,start: String!,end: String!,otherNotes: String,projectId: String!,createdById: String!,updatedById: String!
  }
  input MeetingMinutesWhereUniqueInput{
    id:String!
  }
  input MeetingMinutesUpdateInput{
  done: Boolean,followUp: Boolean,meetingTopic: String,description: String,ownerId: String,priority: Enum_Priority,start: String,end: String,otherNotes: String,projectId: String,createdById: String,updatedById: String
  }
  ,
  #--------------------------Department-----------------------
  type Department{
    id: ID!,name: String!,enabled: Boolean!,rrActivities: [RRActivity],createdAt: String!,updatedAt: String!
  }
  input DepartmentCreateInput{
    name: String!
  }
  input DepartmentWhereUniqueInput{
    id:String!
  }
  input DepartmentUpdateInput{
  name: String,enabled: Boolean
  }
  ,
  #--------------------------ClassCostCenter-----------------------
  type ClassCostCenter{
    id: ID!,name: String!,enabled: Boolean!,rrActivities: [RRActivity],createdAt: String!,updatedAt: String!
  }
  input ClassCostCenterCreateInput{
    name: String!
  }
  input ClassCostCenterWhereUniqueInput{
    id:String!
  }
  input ClassCostCenterUpdateInput{
  name: String,enabled: Boolean
  }
  

  type Mutation {
    # Condition
    createCondition(data:ConditionCreateInput):Condition
    updateCondition(where:ConditionWhereUniqueInput!, data:ConditionUpdateInput ):Condition  
    upsertCondition(where:ConditionWhereUniqueInput!, data:ConditionCreateInput ):Condition    
    deleteCondition(where: ConditionWhereUniqueInput!):Condition,
    
    # DiseaseTargetMarket
    createDiseaseTargetMarket(data:DiseaseTargetMarketCreateInput):DiseaseTargetMarket
    updateDiseaseTargetMarket(where:DiseaseTargetMarketWhereUniqueInput!, data:DiseaseTargetMarketUpdateInput ):DiseaseTargetMarket  
    upsertDiseaseTargetMarket(where:DiseaseTargetMarketWhereUniqueInput!, data:DiseaseTargetMarketCreateInput ):DiseaseTargetMarket    
    deleteDiseaseTargetMarket(where: DiseaseTargetMarketWhereUniqueInput!):DiseaseTargetMarket,

    # StudyType
    createStudyType(data:StudyTypeCreateInput):StudyType
    updateStudyType(where:StudyTypeWhereUniqueInput!, data:StudyTypeUpdateInput ):StudyType  
    upsertStudyType(where:StudyTypeWhereUniqueInput!, data:StudyTypeCreateInput ):StudyType    
    deleteStudyType(where: StudyTypeWhereUniqueInput!):StudyType,

    # StudyDesign
    createStudyDesign(data:StudyDesignCreateInput):StudyDesign
    updateStudyDesign(where:StudyDesignWhereUniqueInput!, data:StudyDesignUpdateInput ):StudyDesign  
    upsertStudyDesign(where:StudyDesignWhereUniqueInput!, data:StudyDesignCreateInput ):StudyDesign    
    deleteStudyDesign(where: StudyDesignWhereUniqueInput!):StudyDesign,

    # StudyRole
    createStudyRole(data:StudyRoleCreateInput):StudyRole
    updateStudyRole(where:StudyRoleWhereUniqueInput!, data:StudyRoleUpdateInput ):StudyRole  
    upsertStudyRole(where:StudyRoleWhereUniqueInput!, data:StudyRoleCreateInput ):StudyRole    
    deleteStudyRole(where: StudyRoleWhereUniqueInput!):StudyRole,

    # Service
    createService(data:ServiceCreateInput):Service
    updateService(where:ServiceWhereUniqueInput!, data:ServiceUpdateInput ):Service  
    upsertService(where:ServiceWhereUniqueInput!, data:ServiceCreateInput ):Service    
    deleteService(where: ServiceWhereUniqueInput!):Service,

    # Department
    createDepartment(data:DepartmentCreateInput):Department
    updateDepartment(where:DepartmentWhereUniqueInput!, data:DepartmentUpdateInput ):Department  
    upsertDepartment(where:DepartmentWhereUniqueInput!, data:DepartmentCreateInput ):Department    
    deleteDepartment(where: DepartmentWhereUniqueInput!):Department
  }


  type Query{
    ## Condition
    conditions:[Condition]
    condition(id:String!):Condition,

    # DiseaseTargetMarket
    diseaseTargetMarkets:[DiseaseTargetMarket]
    diseaseTargetMarket(id:String!):DiseaseTargetMarket,

    # StudyType
    studyTypes:[StudyType]
    studyType(id:String!):StudyType,

    # StudyDesign
    studyDesigns:[StudyDesign]
    studyDesign(id:String!):StudyDesign,

    # StudyRole
    studyRoles:[StudyRole]
    studyRole(id:String!):StudyRole,

    # Service
    services:[Service]
    service(id:String!):Service,

    # Department
    departments:[Department]
    department(id:String!):Department
  }
  
`;

export default typeDefs;
