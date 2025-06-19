import * as hono_hono_base from 'hono/hono-base';
import * as _carlgo11_fake_person from '@carlgo11/fake-person';
import * as hono_utils_http_status from 'hono/utils/http-status';
import * as hono_types from 'hono/types';

declare const baseApp: hono_hono_base.HonoBase<{}, hono_types.BlankSchema | hono_types.MergeSchemaPath<{
    "/": {
        $get: {
            input: {};
            output: "Hello Hono!";
            outputFormat: "text";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
}, "/"> | hono_types.MergeSchemaPath<{
    "/all": {
        $get: {
            input: {};
            output: {
                success: true;
                data: {
                    posts: {
                        title: string;
                        slug: string;
                        date: string;
                        categorie: {
                            name: string;
                            slug: string;
                        };
                        image: string;
                        meta_seo: {
                            title: string;
                            description: string;
                            image: string;
                            url: string;
                        };
                    }[];
                    nextPageAvailable: boolean;
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
} & {
    "/id:slug": {
        $get: {
            input: {
                query: {
                    slug: string;
                };
            };
            output: {
                success: true;
                data: {
                    title: string;
                    slug: string;
                    date: string;
                    categorie: {
                        name: string;
                        slug: string;
                    };
                    content: string;
                    image: string;
                    meta_seo: {
                        title: string;
                        description: string;
                        image: string;
                        url: string;
                    };
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        } | {
            input: {
                query: {
                    slug: string;
                };
            };
            output: {
                success: false;
                error: string;
            };
            outputFormat: "json";
            status: 404;
        };
    };
}, "/posts"> | hono_types.MergeSchemaPath<{
    "/me": {
        $get: {
            input: {};
            output: {
                success: true;
                data: {
                    firstName: string;
                    lastName: string;
                    birthday: string;
                    address: {
                        street: string;
                        city: string;
                        state: string;
                        country: _carlgo11_fake_person.Countries;
                    };
                    phone: string;
                    email: string;
                    civicNo?: string | undefined;
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.ContentfulStatusCode;
        };
    };
}, "/user">, "/">;
type AppType = typeof baseApp;

export type { AppType };
