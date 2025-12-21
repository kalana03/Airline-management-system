"use client";

import { useState, useRef } from "react";
import { PlaneTakeoff, Upload, FileSpreadsheet, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ScheduleFormData {
    flightNumber: string;
    aircraftId: string;
    origin: string;
    destination: string;
    departureDate: string;
    departureTime: string;
    arrivalDate: string;
    arrivalTime: string;
    status: string;
}

export function AddScheduleForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState<ScheduleFormData>({
        flightNumber: "",
        aircraftId: "",
        origin: "",
        destination: "",
        departureDate: "",
        departureTime: "",
        arrivalDate: "",
        arrivalTime: "",
        status: "scheduled"
    });

    const [csvFile, setCsvFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (name: string) => (value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Flight schedule added successfully!");
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            if (file.type === "text/csv" || file.name.endsWith(".csv")) {
                setCsvFile(file);
                setUploadSuccess(false);
            } else {
                alert("Please upload a CSV file");
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            if (file.type === "text/csv" || file.name.endsWith(".csv")) {
                setCsvFile(file);
                setUploadSuccess(false);
            } else {
                alert("Please upload a CSV file");
            }
        }
    };

    const handleCsvUpload = () => {
        if (csvFile) {
            console.log("Uploading CSV:", csvFile.name);
            setUploadSuccess(true);
            setTimeout(() => {
                alert(`CSV file "${csvFile.name}" uploaded successfully!`);
            }, 500);
        }
    };

    const removeFile = () => {
        setCsvFile(null);
        setUploadSuccess(false);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <div className={cn("w-full max-w-4xl mx-auto", className)} {...props}>
            <Card>
                <CardHeader className="space-y-1 pb-6">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                            <PlaneTakeoff className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold">Add Flight Schedule</CardTitle>
                            <CardDescription className="text-base mt-1">
                                Add individual flight schedules or upload multiple schedules via CSV
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="manual" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="manual" className="gap-2">
                                <PlaneTakeoff className="h-4 w-4" />
                                Manual Entry
                            </TabsTrigger>
                            <TabsTrigger value="csv" className="gap-2">
                                <FileSpreadsheet className="h-4 w-4" />
                                CSV Upload
                            </TabsTrigger>
                        </TabsList>

                        {/* Manual Entry Tab */}
                        <TabsContent value="manual" className="space-y-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2">
                                            <Label htmlFor="flightNumber">
                                                Flight Number <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="flightNumber"
                                                name="flightNumber"
                                                placeholder="e.g., EK001"
                                                value={formData.flightNumber}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="aircraftId">
                                                Aircraft ID <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="aircraftId"
                                                name="aircraftId"
                                                placeholder="e.g., AC-001"
                                                value={formData.aircraftId}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="origin">
                                                Origin Airport <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="origin"
                                                name="origin"
                                                placeholder="e.g., DXB - Dubai International"
                                                value={formData.origin}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="destination">
                                                Destination Airport <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="destination"
                                                name="destination"
                                                placeholder="e.g., JFK - New York JFK"
                                                value={formData.destination}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="departureDate">
                                                Departure Date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="departureDate"
                                                name="departureDate"
                                                type="date"
                                                value={formData.departureDate}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="departureTime">
                                                Departure Time <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="departureTime"
                                                name="departureTime"
                                                type="time"
                                                value={formData.departureTime}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="arrivalDate">
                                                Arrival Date <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="arrivalDate"
                                                name="arrivalDate"
                                                type="date"
                                                value={formData.arrivalDate}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="arrivalTime">
                                                Arrival Time <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="arrivalTime"
                                                name="arrivalTime"
                                                type="time"
                                                value={formData.arrivalTime}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="status">
                                                Status <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                value={formData.status}
                                                onValueChange={handleSelectChange("status")}
                                            >
                                                <SelectTrigger className="transition-all focus:ring-2 focus:ring-primary/20">
                                                    <SelectValue placeholder="Select status" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="scheduled">Scheduled</SelectItem>
                                                    <SelectItem value="boarding">Boarding</SelectItem>
                                                    <SelectItem value="departed">Departed</SelectItem>
                                                    <SelectItem value="in-flight">In Flight</SelectItem>
                                                    <SelectItem value="landed">Landed</SelectItem>
                                                    <SelectItem value="cancelled">Cancelled</SelectItem>
                                                    <SelectItem value="delayed">Delayed</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-end gap-3 pt-4">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={() => {
                                            setFormData({
                                                flightNumber: "",
                                                aircraftId: "",
                                                origin: "",
                                                destination: "",
                                                departureDate: "",
                                                departureTime: "",
                                                arrivalDate: "",
                                                arrivalTime: "",
                                                status: "scheduled"
                                            });
                                        }}
                                    >
                                        Reset
                                    </Button>
                                    <Button type="submit" className="gap-2">
                                        <Check className="h-4 w-4" />
                                        Add Schedule
                                    </Button>
                                </div>
                            </form>
                        </TabsContent>

                        {/* CSV Upload Tab */}
                        <TabsContent value="csv" className="space-y-6">
                            <div className="space-y-6">
                                <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                                    <h3 className="text-sm font-semibold flex items-center gap-2">
                                        <FileSpreadsheet className="h-4 w-4" />
                                        CSV Format Requirements
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Your CSV file should include the following columns:
                                    </p>
                                    <div className="bg-background rounded border p-3 font-mono text-xs overflow-x-auto">
                                        flightNumber,aircraftId,origin,destination,departureDate,departureTime,arrivalDate,arrivalTime,status
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Example:</strong> EK001,AC-001,DXB - Dubai International,JFK - New York JFK,2025-01-15,14:30,2025-01-15,22:45,scheduled
                                    </p>
                                </div>

                                <div
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                    className={cn(
                                        "border-2 border-dashed rounded-lg p-8 transition-all duration-200",
                                        isDragging
                                            ? "border-primary bg-primary/5 scale-[1.02]"
                                            : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/30",
                                        csvFile && "border-green-500 bg-green-500/5"
                                    )}
                                >
                                    <div className="flex flex-col items-center justify-center gap-4 text-center">
                                        {!csvFile ? (
                                            <>
                                                <div className="p-4 bg-primary/10 rounded-full">
                                                    <Upload className="h-8 w-8 text-primary" />
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-lg font-semibold">
                                                        {isDragging ? "Drop your CSV file here" : "Drag and drop your CSV file"}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        or click to browse from your computer
                                                    </p>
                                                </div>
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => fileInputRef.current?.click()}
                                                    className="gap-2"
                                                >
                                                    <FileSpreadsheet className="h-4 w-4" />
                                                    Select CSV File
                                                </Button>
                                                <input
                                                    ref={fileInputRef}
                                                    type="file"
                                                    accept=".csv"
                                                    onChange={handleFileSelect}
                                                    className="hidden"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <div className="p-4 bg-green-500/10 rounded-full">
                                                    {uploadSuccess ? (
                                                        <Check className="h-8 w-8 text-green-500" />
                                                    ) : (
                                                        <FileSpreadsheet className="h-8 w-8 text-green-500" />
                                                    )}
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="text-lg font-semibold text-green-600">
                                                        {uploadSuccess ? "Upload Successful!" : "File Ready"}
                                                    </p>
                                                    <div className="flex items-center gap-2 bg-background rounded-lg px-4 py-2 border">
                                                        <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
                                                        <span className="text-sm font-medium">{csvFile.name}</span>
                                                        <span className="text-xs text-muted-foreground">
                                                            ({(csvFile.size / 1024).toFixed(2)} KB)
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={removeFile}
                                                        className="gap-2"
                                                    >
                                                        <X className="h-4 w-4" />
                                                        Remove
                                                    </Button>
                                                    {!uploadSuccess && (
                                                        <Button
                                                            type="button"
                                                            onClick={handleCsvUpload}
                                                            className="gap-2"
                                                        >
                                                            <Upload className="h-4 w-4" />
                                                            Upload CSV
                                                        </Button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <Button
                                        type="button"
                                        variant="link"
                                        className="gap-2 text-sm"
                                        onClick={() => {
                                            const template = `flightNumber,aircraftId,origin,destination,departureDate,departureTime,arrivalDate,arrivalTime,status
EK001,AC-001,DXB - Dubai International,JFK - New York JFK,2025-01-15,14:30,2025-01-15,22:45,scheduled
EK002,AC-002,DXB - Dubai International,LHR - London Heathrow,2025-01-16,08:00,2025-01-16,12:30,scheduled`;

                                            const blob = new Blob([template], { type: "text/csv" });
                                            const url = window.URL.createObjectURL(blob);
                                            const a = document.createElement("a");
                                            a.href = url;
                                            a.download = "schedules_template.csv";
                                            a.click();
                                            window.URL.revokeObjectURL(url);
                                        }}
                                    >
                                        <FileSpreadsheet className="h-4 w-4" />
                                        Download CSV Template
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
