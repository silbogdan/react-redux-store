#!/bin/bash

IMAGENAME=shopcart
VERSION=$(expr $(cat VERSION) + 1)

echo $VERSION > VERSION

docker build -t $IMAGENAME:$VERSION .
