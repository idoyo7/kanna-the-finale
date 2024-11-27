// api/getTimer/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Get current time and timezone
    const now = new Date();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    // Convert to Korean time (UTC+9)
    const koreanTime = new Date(now.getTime() + (9 * 60 - now.getTimezoneOffset()) * 60000);
    
    // Target date (2024-12-02 00:00:00 Korean time)
    const targetDate = new Date('2024-12-02T00:00:00+09:00');
    
    // Calculate time difference
    const timeDiff = targetDate.getTime() - now.getTime();
    
    // Convert to days, hours, minutes, seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return NextResponse.json({
        currentTime: now.toISOString(),
        timeZone: timeZone,
        koreanTime: koreanTime.toISOString(),
        timeUntilTarget: {
            days,
            hours,
            minutes,
            seconds
        }
    });
}