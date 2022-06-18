<div align="center">
    <img src="/static/icons/grist.svg" width=120 alt="logo" />
    <br />
    <br />
    <small>Auto data modeling for VC/PE</small>
</div>

# Irelia

Irelia is a modern relational spreadsheet. It combines the flexibility of a spreadsheet with the robustness of a 
database to organize your data and make you more productive.

## Features

Here are some specific feature highlights of Irelia:

* Python formulas.
    - Full Python syntax is supported, and the standard library.
    - Many [Excel functions](https://support.getgrist.com/functions/) also available.
* A portable, self-contained format.
    - Based on SQLite, the most widely deployed database engine.
    - Any tool that can read SQLite can read numeric and text data from a Irelia file.
    - Irelia format for [backups](https://support.getgrist.com/exports/#backing-up-an-entire-document) that you can be confident you can restore in full.
    - Irelia format for moving between different hosts.
* Convenient editing and formatting features.
    - Choices and [choice lists](https://support.getgrist.com/col-types/#choice-list-columns), for adding colorful tags to records without fuss.
    - [References](https://support.getgrist.com/col-refs/#creating-a-new-reference-list-column) and reference lists, for cross-referencing records in other tables.
    - [Attachments](https://support.getgrist.com/col-types/#attachment-columns), to include media or document files in records.
    - Dates and times, toggles, and special numerics such as currency all have specialized editors and formatting options.
* Irelia for dashboards, visualizations, and data entry.
    - [Charts](https://support.getgrist.com/widget-chart/) for visualization.
    - [Summary tables](https://support.getgrist.com/summary-tables/) for summing and counting across groups.
    - [Widget linking](https://support.getgrist.com/linking-widgets/) streamlines filtering and editing data.
      Grist has a unique approach to visualization, where you can lay out and link distinct widgets to show together,
      without cramming mixed material into a table.
    - The [Filter bar](https://support.getgrist.com/search-sort-filter/#filter-buttons) is great for quick slicing and dicing.
* [Incremental imports](https://support.getgrist.com/imports/#updating-existing-records).
    - So you can import a CSV of the last three months activity from your bank...
    - ... and import new activity a month later without fuss or duplicates.
* Integrations.
    - A [REST API](https://support.getgrist.com/api/), [Zapier actions/triggers](https://support.getgrist.com/integrators/#integrations-via-zapier), and support from similar [integrators](https://support.getgrist.com/integrators/).
    - Import/export to Google drive, Excel format, CSV.
    - Can link data with custom widgets hosted externally.
* [Many templates](https://templates.getgrist.com/) to get you started, from investment research to organizing treasure hunts.
* Access control options.
    - (You'll need SSO logins set up to make use of these options)
    - Share [individual documents](https://support.getgrist.com/sharing/), or workspaces, or [team sites](https://support.getgrist.com/team-sharing/).
    - Control access to [individual rows, columns, and tables](https://support.getgrist.com/access-rules/).
    - Control access based on cell values and user attributes.
* Can be self-maintained.
    - Useful for intranet operation and specific compliance requirements.
* Sandboxing options for untrusted documents.
    - On Linux or with docker, you can enable
      [gVisor](https://github.com/google/gvisor) sandboxing at the individual
      document level.
    - On OSX, you can use native sandboxing.

If you are curious about where Irelia is going heading,
see [our roadmap](https://github.com/gristlabs/grist-core/projects/1), drop a
question in [our forum](https://community.getgrist.com),
or browse [our extensive documentation](https://support.getgrist.com).


## Building from source

To build Irelia from source, follow these steps:

```shell
yarn install
yarn run build:prod
yarn run install:python
yarn start
# Irelia will be available at http://localhost:8484/
```
Irelia formulas in documents will be run using Python executed directly on your machine. 
You can configure sandboxing using a `GRIST_SANDBOX_FLAVOR` environment variable.

* On OSX, `export GRIST_SANDBOX_FLAVOR=macSandboxExec`
  uses the native `sandbox-exec` command for sandboxing.
* On Linux with [gVisor's runsc](https://github.com/google/gvisor)
  installed, `export GRIST_SANDBOX_FLAVOR=gvisor` is an option.


## Environment variables

Grist can be configured in many ways. Here are the main environment variables it is sensitive to:

Variable | Purpose
-------- | -------
ALLOWED_WEBHOOK_DOMAINS | comma-separated list of permitted domains to use in webhooks (e.g. webhook.site,zapier.com)
APP_DOC_URL | doc worker url, set when starting an individual doc worker (other servers will find doc worker urls via redis)
APP_HOME_URL | url prefix for home api (home and doc servers need this)
APP_STATIC_URL | url prefix for static resources
APP_STATIC_INCLUDE_CUSTOM_CSS | set to "true" to include custom.css (from APP_STATIC_URL) in static pages
APP_UNTRUSTED_URL   | URL at which to serve/expect plugin content.
GRIST_ADAPT_DOMAIN | set to "true" to support multiple base domains (careful, host header should be trustworthy)
GRIST_APP_ROOT      | directory containing Grist sandbox and assets (specifically the sandbox and static subdirectories).
GRIST_BACKUP_DELAY_SECS | wait this long after a doc change before making a backup
GRIST_DATA_DIR      | directory in which to store document caches.
GRIST_DEFAULT_EMAIL | if set, login as this user if no other credentials presented
GRIST_DEFAULT_PRODUCT  | if set, this controls enabled features and limits of new sites. See names of PRODUCTS in Product.ts.
GRIST_DOMAIN        | in hosted Grist, Grist is served from subdomains of this domain.  Defaults to "getgrist.com".
GRIST_EXPERIMENTAL_PLUGINS | enables experimental plugins
GRIST_HIDE_UI_ELEMENTS | comma-separated list of parts of the UI to hide. Allowed names of parts: `helpCenter,billing,templates,multiSite,multiAccounts`
GRIST_HOME_INCLUDE_STATIC | if set, home server also serves static resources
GRIST_HOST          | hostname to use when listening on a port.
GRIST_ID_PREFIX | for subdomains of form o-*, expect or produce o-${GRIST_ID_PREFIX}*.
GRIST_INST_DIR      | path to Grist instance configuration files, for Grist server.
GRIST_MANAGED_WORKERS | if set, Grist can assume that if a url targeted at a doc worker returns a 404, that worker is gone
GRIST_MAX_UPLOAD_ATTACHMENT_MB | max allowed size for attachments (0 or empty for unlimited).
GRIST_MAX_UPLOAD_IMPORT_MB | max allowed size for imports (except .grist files) (0 or empty for unlimited).
GRIST_ORG_IN_PATH | if true, encode org in path rather than domain
GRIST_PAGE_TITLE_SUFFIX | a string to append to the end of the `<title>` in HTML documents. Defaults to `" - Grist"`. Set to `_blank` for no suffix at all.
GRIST_PROXY_AUTH_HEADER | header which will be set by a (reverse) proxy webserver with an authorized users' email. This can be used as an alternative to a SAML service.
GRIST_ROUTER_URL | optional url for an api that allows servers to be (un)registered with a load balancer
GRIST_SERVE_SAME_ORIGIN | set to "true" to access home server and doc workers on the same protocol-host-port as the top-level page, same as for custom domains (careful, host header should be trustworthy)
GRIST_SESSION_COOKIE | if set, overrides the name of Grist's cookie
GRIST_SESSION_DOMAIN | if set, associates the cookie with the given domain - otherwise defaults to GRIST_DOMAIN
GRIST_SESSION_SECRET | a key used to encode sessions
GRIST_FORCE_LOGIN    | when set to 'true' disables anonymous access
GRIST_SINGLE_ORG | set to an org "domain" to pin client to that org
GRIST_SUPPORT_ANON | if set to 'true', show UI for anonymous access (not shown by default)
GRIST_THROTTLE_CPU | if set, CPU throttling is enabled
GRIST_USER_ROOT     | an extra path to look for plugins in.
COOKIE_MAX_AGE      | session cookie max age, defaults to 90 days; can be set to "none" to make it a session cookie
HOME_PORT           | port number to listen on for REST API server; if set to "share", add API endpoints to regular grist port.
PORT                | port number to listen on for Grist server
REDIS_URL           | optional redis server for browser sessions and db query caching

Sandbox related variables:

Variable | Purpose
-------- | -------
GRIST_SANDBOX_FLAVOR | can be pynbox, unsandboxed, docker, or macSandboxExec. If set, forces Grist to use the specified kind of sandbox.
GRIST_SANDBOX | a program or image name to run as the sandbox. See NSandbox.ts for nerdy details.
PYTHON_VERSION | can be 2 or 3. If set, documents without an engine setting are assumed to use the specified version of python. Not all sandboxes support all versions.
PYTHON_VERSION_ON_CREATION | can be 2 or 3. If set, newly created documents have an engine setting set to python2 or python3. Not all sandboxes support all versions.

Google Drive integrations:

Variable | Purpose
-------- | -------
GOOGLE_CLIENT_ID    | set to the Google Client Id to be used with Google API client
GOOGLE_CLIENT_SECRET| set to the Google Client Secret to be used with Google API client
GOOGLE_API_KEY      | set to the Google API Key to be used with Google API client (accessing public files)
GOOGLE_DRIVE_SCOPE  | set to the scope requested for Google Drive integration (defaults to drive.file)

Database variables:

Variable | Purpose
-------- | -------
TYPEORM_DATABASE | database filename for sqlite or database name for other db types
TYPEORM_HOST     | host for db
TYPEORM_LOGGING  | set to 'true' to see all sql queries
TYPEORM_PASSWORD | password to use
TYPEORM_PORT     | port number for db if not the default for that db type
TYPEORM_TYPE     | set to 'sqlite' or 'postgres'
TYPEORM_USERNAME | username to connect as

Testing:

Variable | Purpose
-------- | -------
GRIST_TESTING_SOCKET | a socket used for out-of-channel communication during tests only.
GRIST_TEST_HTTPS_OFFSET | if set, adds https ports at the specified offset.  This is useful in testing.
GRIST_TEST_SSL_CERT | if set, contains filename of SSL certificate.
GRIST_TEST_SSL_KEY  | if set, contains filename of SSL private key.
GRIST_TEST_LOGIN    | allow fake unauthenticated test logins (suitable for dev environment only).
GRIST_TEST_ROUTER | if set, then the home server will serve a mock version of router api at /test/router

## License

This repository is released under the [Apache License, Version
2.0](http://www.apache.org/licenses/LICENSE-2.0), which is an
[OSI](https://opensource.org/)-approved free software license.
See LICENSE.txt and NOTICE.txt for more information.