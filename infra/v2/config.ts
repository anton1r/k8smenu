// Copyright 2016-2018, Pulumi Corporation.  All rights reserved.

import * as gcp from "@pulumi/gcp";
import { Config } from "@pulumi/pulumi";

const config = new Config();

export const region = config.get("region");

/// PostgreSQL config
export const dbUsername = config.require("dbUsername");
export const dbPassword = config.require("dbPassword");

/// Kubernetes config
export const clusterNodeCount = config.getNumber("clusterNodeCount") || 1;
export const clusterNodeMachineType = config.get("clusterNodeMachineType") || "n1-standard-1";
export const clusterUsername = config.get("clusterUsername") || "admin";
export const clusterPassword = config.require("clusterPassword");
export const masterVersion = config.get("masterVersion") || "latest";