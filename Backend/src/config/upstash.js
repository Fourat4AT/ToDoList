import ratelimitPkg from "@upstash/ratelimit";
import { Redis } from '@upstash/redis'

import dotenv from "dotenv";

dotenv.config()
// crearte a ratelimiter 10 req per 20 secs 
const { Ratelimit } = ratelimitPkg;

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
    redis,
    limiter:Ratelimit.slidingWindow(5,"10 s"),
})
export default ratelimit;