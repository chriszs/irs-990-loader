#!/bin/bash

for file in $(find $1*.txt); do
	wget -N -P $2 -i $file
done