'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react'

function CalculatePage() {
    const searchParams = useSearchParams()

    const data = searchParams.get('data')

    // Parse the data if it exists
    const parsedData = data ? JSON.parse(decodeURIComponent(data as string)) : null;
    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Calculated Data</h1>
            {parsedData ? (
                <div className="space-y-4">
                    <p>
                        <strong>Name:</strong> {parsedData.name || 'N/A'}
                    </p>
                    <p>
                        <strong>Contact:</strong> {parsedData.contact}
                    </p>
                    <p>
                        <strong>Selected Level:</strong> {parsedData.selected}
                    </p>
                    <p>
                        <strong>Length:</strong> {parsedData.length} meters
                    </p>
                    <p>
                        <strong>Width:</strong> {parsedData.width} meters
                    </p>
                    <p>
                        <strong>Number of Chickens:</strong> {parsedData.chickens}
                    </p>
                    <p>
                        <strong>Salary:</strong> {parsedData.salary} PKR
                    </p>
                    <p>
                        <strong>Shed Type:</strong> {parsedData.shedType}
                    </p>
                    <p>
                        <strong>Cage Type:</strong> {parsedData.cageType}
                    </p>
                </div>
            ) : (
                <p>No data found in the URL.</p>
            )}
        </div>
    )
}

export default CalculatePage