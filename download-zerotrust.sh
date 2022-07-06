#!/bin/bash

# Download latest zerotrust binaries. Requires curl and jq to be available

binaryDir="zerotrust-binary"
downloadDir="${binaryDir}/releases"
darwinDir="${binaryDir}/darwin"
linuxDir="${binaryDir}/linux"
windowsDir="${binaryDir}/windows"
mkdir -p "${darwinDir}"
mkdir -p "${linuxDir}"
mkdir -p "${windowsDir}"
mkdir -p "${downloadDir}"


rm -rf "${downloadDir}"
mkdir -p "${downloadDir}"

artefacts=$(curl -s https://api.github.com/repos/adedayo/zerotrust/releases/latest | jq -r ".assets[].browser_download_url")


for x in $artefacts; do
  if [[ "$x" == *x86_64* ]]; then
    echo "$x"

    IFS='/'
    read -a xs <<<"$x"
    gzFile="${xs[${#xs[@]}-1]}"

    if [ ! -f "${downloadDir}/${gzFile}" ]; then
     os=$(uname | tr '[:upper:]' '[:lower:]')
     echo "${os}"
     xx=$(echo "$x" | tr '[:upper:]' '[:lower:]')
     if [[ "$xx" == *"$os"* ]]; then #only download for current OS
        pushd "${downloadDir}"
        curl -O -L "$x"
        tar xvfz "${gzFile}"
        ls
        popd

        if [[ "$x" == *Darwin* ]]; then
          mv "${downloadDir}/zt" "${binaryDir}/darwin/"
        fi
        if [[ "$x" == *linux* ]]; then
          mv "${downloadDir}/zt" "${binaryDir}/linux/"
        fi
        if [[ "$x" == *windows* ]]; then
          mv "${downloadDir}/zt.exe" "${binaryDir}/windows/"
        fi
      fi
    fi

    ls -alshR "${binaryDir}"

    IFS=' '
   fi
done
