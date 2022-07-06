#!/bin/bash

#this will not necessarily work outside of my computer :-p, but useful for quick local development iteration

pushd ../zero-trust-service

goreleaser build --config .goreleaser-mac.yml --rm-dist --snapshot

popd

mkdir -p zerotrust-binary/darwin
cp ../zero-trust-service/dist/zerotrust_darwin_amd64_v1/zt zerotrust-binary/darwin
