"use client";

import { useState, useRef } from "react";
import { Plane, Upload, FileSpreadsheet, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PilotFormData {
    pilotId: string;
    firstName: string;
    lastName: string;
    email: string;
    licenseNumber: string;
    rank: string;
    trainedAircraft: string;
    base: string;
}

export function AddPilotForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [formData, setFormData] = useState<PilotFormData>({
        pilotId: "",
        firstName: "",
        lastName: "",
        email: "",
        licenseNumber: "",
        rank: "first-officer",
        trainedAircraft: "",
        base: ""
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
        alert("Pilot added successfully!");
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
                            <Plane className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl font-bold">Add Pilot</CardTitle>
                            <CardDescription className="text-base mt-1">
                                Add individual pilot details or upload multiple pilots via CSV
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="manual" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                            <TabsTrigger value="manual" className="gap-2">
                                <Plane className="h-4 w-4" />
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
                                            <Label htmlFor="pilotId">
                                                Pilot ID <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="pilotId"
                                                name="pilotId"
                                                placeholder="e.g., PLT-001"
                                                value={formData.pilotId}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">
                                                First Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="firstName"
                                                name="firstName"
                                                placeholder="e.g., John"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">
                                                Last Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="lastName"
                                                name="lastName"
                                                placeholder="e.g., Smith"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="e.g., john.smith@airline.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="licenseNumber">
                                                License Number <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="licenseNumber"
                                                name="licenseNumber"
                                                placeholder="e.g., ATP-123456"
                                                value={formData.licenseNumber}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>


                                        <div className="space-y-2">
                                            <Label htmlFor="rank">
                                                Rank <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                value={formData.rank}
                                                onValueChange={handleSelectChange("rank")}
                                            >
                                                <SelectTrigger className="transition-all focus:ring-2 focus:ring-primary/20">
                                                    <SelectValue placeholder="Select rank" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="captain">Captain</SelectItem>
                                                    <SelectItem value="first-officer">First Officer</SelectItem>
                                                    <SelectItem value="second-officer">Second Officer</SelectItem>
                                                    <SelectItem value="trainee">Trainee</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="trainedAircraft">
                                                Trained Aircraft <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="trainedAircraft"
                                                name="trainedAircraft"
                                                placeholder="e.g., Boeing 777, Airbus A380"
                                                value={formData.trainedAircraft}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="base">
                                                Base <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="base"
                                                name="base"
                                                placeholder="e.g., Dubai International Airport"
                                                value={formData.base}
                                                onChange={handleInputChange}
                                                required
                                                className="transition-all focus:ring-2 focus:ring-primary/20"
                                            />
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
                                                pilotId: "",
                                                firstName: "",
                                                lastName: "",
                                                email: "",
                                                licenseNumber: "",
                                                rank: "first-officer",
                                                trainedAircraft: "",
                                                base: ""
                                            });
                                        }}
                                    >
                                        Reset
                                    </Button>
                                    <Button type="submit" className="gap-2">
                                        <Check className="h-4 w-4" />
                                        Add Pilot
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
                                        pilotId,firstName,lastName,email,licenseNumber,rank,trainedAircraft,base
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                        <strong>Example:</strong> PLT-001,John,Smith,john.smith@airline.com,ATP-123456,captain,Boeing 777,Dubai International Airport
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
                                            const template = `pilotId,firstName,lastName,email,licenseNumber,rank,trainedAircraft,base
PLT-001,John,Smith,john.smith@airline.com,ATP-123456,captain,Boeing 777,Dubai International Airport
PLT-002,Sarah,Johnson,sarah.johnson@airline.com,ATP-789012,first-officer,Airbus A380,Abu Dhabi International Airport`;

                                            const blob = new Blob([template], { type: "text/csv" });
                                            const url = window.URL.createObjectURL(blob);
                                            const a = document.createElement("a");
                                            a.href = url;
                                            a.download = "pilots_template.csv";
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
