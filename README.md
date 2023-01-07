<div align="right">
    <img src="https://raw.githubusercontent.com/IreliaTable/irelia/main/static/img/guinsoolab-badge.png" width="60" alt="badge">
</div>
<div align="center">
    <img src="https://raw.githubusercontent.com/IreliaTable/irelia/main/static/img/irelia.svg" width="120" alt="logo" />
    <br />
    <small>a modern relational spreadsheet</small>
</div>

# Irelia

> Irelia is a modern relational spreadsheet. It combines the flexibility of a spreadsheet with the robustness of a
database to organize your data and make you more productive.

![overview](https://raw.githubusercontent.com/IreliaTable/irelia/main/static/img/irelia-overview.png)

## Quickstart

There are docker images set up for individual use, or (with some configuration) for self-hosting.

```bash
docker pull jicius/irelia
docker run -p 8686:8686 -it jicius/irelia
```

Then visit `http://localhost:8686` in your browser. You'll be able to create, edit, import, and export documents.

## Features

Here are some specific feature highlights of Irelia:

* Python formulas.
    - Full Python syntax is supported, and the standard library.
    - Many [Excel functions](https://ciusji.gitbook.io/irelia/using-formulas/function-reference) also available.
* A portable, self-contained format.
    - Based on SQLite, the most widely deployed database engine.
    - Any tool that can read SQLite can read numeric and text data from a Irelia file.
    - Irelia format for [backups](https://ciusji.gitbook.io/irelia/managing-documents/exports-and-backups#backuping-up-an-entire-document) that you can be confident you can restore in full.
    - Irelia format for moving between different hosts.
* Convenient editing and formatting features.
    - Choices and choice lists, for adding colorful tags to records without fuss.
    - References and reference lists, for cross-referencing records in other tables.
    - Attachments, to include media or document files in records.
    - Dates and times, toggles, and special numerics such as currency all have specialized editors and formatting options.
* Irelia for dashboards, visualizations, and data entry.
    - [Charts](https://ciusji.gitbook.io/irelia/how-to-tutorials/analyze-and-visualize) for visualization.
    - [Summary tables](https://ciusji.gitbook.io/irelia/how-to-tutorials/analyze-and-visualize) for summing and counting across groups.
    - Widget linking streamlines filtering and editing data.
      Irelia has a unique approach to visualization, where you can lay out and link distinct widgets to show together,
      without cramming mixed material into a table.
    - The Filter bar is great for quick slicing and dicing.
* [Incremental imports](https://ciusji.gitbook.io/irelia/managing-documents/importing-data#import-to-an-existing-table).
    - So you can import a CSV of the last three months activity from your bank...
    - ... and import new activity a month later without fuss or duplicates.
* Integrations.
    - A [REST API](https://ciusji.gitbook.io/irelia/appendix/faq).
    - Import/export to Google drive, Excel format, CSV.
    - Can link data with custom widgets hosted externally.
* Access control options.
    - (You'll need SSO logins set up to make use of these options)
    - Share [individual documents](https://ciusji.gitbook.io/irelia/managing-documents/sharing-a-document), or workspaces.
    - Control access to individual rows, columns, and tables.
    - Control access based on cell values and user attributes.
* Can be self-maintained.
    - Useful for intranet operation and specific compliance requirements.
* Sandboxing options for untrusted documents.
    - On Linux or with docker, you can enable
      [gVisor](https://github.com/google/gvisor) sandboxing at the individual
      document level.
    - On OSX, you can use native sandboxing.

## Documentation

- [Tutorials](https://ciusji.gitbook.io/irelia/how-to-tutorials/analyze-and-visualize)
- Managing Documents
    - [Creating a Document](https://ciusji.gitbook.io/irelia/managing-documents/create-a-document)
    - [Sharing a Document](https://ciusji.gitbook.io/irelia/managing-documents/sharing-a-document)
    - [Copying a Document](https://ciusji.gitbook.io/irelia/managing-documents/copying-a-document)
    - [Importing Data](https://ciusji.gitbook.io/irelia/managing-documents/importing-data)
    - [Exports & Backups](https://ciusji.gitbook.io/irelia/managing-documents/exports-and-backups)
    - [Document History](https://ciusji.gitbook.io/irelia/managing-documents/document-history)
- Pages & Tables
    - [Entering data](https://ciusji.gitbook.io/irelia/pages-and-tables/entering-data)
    - [Pages & Widgets](https://ciusji.gitbook.io/irelia/pages-and-tables/pages-and-widgets)
    - [Search & Sort & Filter](https://ciusji.gitbook.io/irelia/pages-and-tables/search-sort-and-filter)
- Using Formulas
    - [Intro to Formulas](https://ciusji.gitbook.io/irelia/using-formulas/intro-to-formulas)
    - [Python Versions](https://ciusji.gitbook.io/irelia/using-formulas/python-versions)
    - [Function Reference](https://ciusji.gitbook.io/irelia/using-formulas/function-reference)
- Templates 🔥
    - [Personal](https://ciusji.gitbook.io/irelia/templates/personal)
    - [Business](https://ciusji.gitbook.io/irelia/templates/business)
    - [Industry](https://ciusji.gitbook.io/irelia/templates/industry)
    - [Funding](https://ciusji.gitbook.io/irelia/templates/funding)
    - [Finance](https://ciusji.gitbook.io/irelia/templates/finance)
    - [Sales](https://ciusji.gitbook.io/irelia/templates/sales)
    - [Customers](https://ciusji.gitbook.io/irelia/templates/customers)
- Appendix
    - [Ecosystem](https://ciusji.gitbook.io/irelia/ecosystem/ecosystem)
    - [Solutions](https://ciusji.gitbook.io/irelia/solutions/solutions)
    - [FAQs](https://ciusji.gitbook.io/irelia/appendix/faq)
    - [Help](https://ciusji.gitbook.io/irelia/appendix/help)

## Building From Source

To build Irelia from source, follow these steps:

```shell
yarn install
yarn run build:prod
yarn run install:python
yarn start
# Irelia will be available at http://localhost:8686/
```
Irelia formulas in documents will be run using Python executed directly on your machine.
You can configure sandboxing using a `GRIST_SANDBOX_FLAVOR` environment variable.

* On OSX, `export GRIST_SANDBOX_FLAVOR=macSandboxExec`
  uses the native `sandbox-exec` command for sandboxing.
* On Linux with [gVisor's runsc](https://github.com/google/gvisor)
  installed, `export GRIST_SANDBOX_FLAVOR=gvisor` is an option.


## License

This repository is released under the [Apache License, Version
2.0](http://www.apache.org/licenses/LICENSE-2.0), which is an
[OSI](https://opensource.org/)-approved free software license.
See LICENSE.txt and NOTICE.txt for more information.