# deno_test <!-- omit in toc -->

- [Setup](#setup)
- [Running against changes to Deno](#running-against-changes-to-deno)
- [Debugging against changes to Deno](#debugging-against-changes-to-deno)

This is a repo to test changes made to the Deno runtime. This is meant to be checked out along side the Deno source code and edited in a separate editor window.

## Setup

Check out this repo in the same folder that you checked out `deno`. Ensure you have set up the `deno` repo to [build from source](https://docs.deno.com/runtime/manual/references/contributing/building_from_source).

## Running against changes to Deno

First, build your changes into an executable by running `cargo build -vv` in the `deno` repo. - Consult [Deno's docs](https://docs.deno.com/runtime/manual/references/contributing/building_from_source) for more detailed instructions for how to [build from source](https://docs.deno.com/runtime/manual/references/contributing/building_from_source)

Run `./deno <arguments>` to run against any changes you made to Deno.

## Debugging against changes to Deno

Launch the `Debug script` launch configuration.
