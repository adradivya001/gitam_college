import { loadCollegeData, getAvailableColleges } from '../tier3/contentLoader';

/**
 * Service abstraction layer for fetching college content dynamically from Tier 3 JSONs.
 */
export const contentService = {
  getCollegeData(collegeId = 'cognizant') {
    return loadCollegeData(collegeId);
  },

  getAvailableColleges() {
    return getAvailableColleges();
  },

  getSiteConfig(collegeId = 'cognizant') {
    const data = loadCollegeData(collegeId);
    return data?.college || {};
  },

  getHomePageData(collegeId = 'cognizant') {
    const data = loadCollegeData(collegeId);
    return {
      college: data?.college,
      sections: data?.sections,
      theme: data?.theme
    };
  },

  getPrograms(collegeId = 'cognizant') {
    const data = loadCollegeData(collegeId);
    return data?.courses || { programs: [] };
  },

  getGurus(collegeId = 'cognizant') {
    const data = loadCollegeData(collegeId);
    return data?.faculty || { members: [] };
  }
};
