import { fetchAPI } from 'api';

export const getHeroData = async previewData => {
    const data = await fetchAPI(
        `
        query {
            _allDocuments {
                edges {
                    node {
                        ... on Home {
                            background_image
                            featured_video
                            video_url
                            about
                        }
                        ... on Project {
                            title
                        }
                    }
                }
            }
        }
        `,
        { previewData },
    );

    return data?._allDocuments?.edges;
};

export const getProjectData = async previewData => {
    const data = await fetchAPI(
        `
        query {
            allProjects {
                edges {
                    node {
                      featured_image
                      title
                      subtitle
                      tags {
                        tag
                      }
                      _meta {
                        uid
                      }
                    }
                }
            }
        }
        `,
        { previewData },
    );

    return data?.allProjects?.edges;
};
