import React, {useState, useRef} from 'react'
import { useDispatch } from 'react-redux';
import api from "../../config";
import { getRegisteredConfig } from '../../utils';
import { storage } from '../../firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { getAuthToken } from '../../utils';

const ResearchUploadForm = () => {
    const pdfFileRef = useRef();
    const dispatch = useDispatch();
    const config = getRegisteredConfig();
    const [progress, setProgress] = useState(0);
    const [researchInputFields, setResearchInputFields] = useState({
        title: '',
        slug: '',
        description: '',
        pdfFile: []
    }); 
    const authToken = getAuthToken();

    const { title, slug, description, pdfFile } = researchInputFields;

    const handleInputChange = (e) => {
        setResearchInputFields({
            ...researchInputFields,
            [e.target.name]: e.target.value
        });
    }

    const handleFileChange = (e) => {
        setResearchInputFields({
            ...researchInputFields,
            pdfFile: e.target.files[0]
        });
    }

    const handleUpload = (e) => {
        e.preventDefault();
        const storageRef = ref(storage, `pdfs/${pdfFile.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pdfFile);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        alert(error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        const {data} = await api.post(
            '/research', 
            {
                title,
                slug,
                description,
                pdf: url
            },
            {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Access-Control-Allow-Origin' : '*'
                }
            }
        )
            console.log(data);
    });

        setResearchInputFields({
            ...researchInputFields,
            title: '',
            slug: '',
            description: '',
            pdfFile: []
        });
    }

  return (
    <section className="p-6 py-4 dark:dark:bg-gray-800 dark:dark:text-gray-50">
	<form 
        novalidate=""
        onSubmit={handleUpload}
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        encType="multipart/form-data"
    >
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Reseach Inormation</p>
				<p className="text-xs">
                    Upload Your Research
                </p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full">
					<label for="title" className="text-sm">
                        Research Title
                    </label>
					<input 
                        id="title"
                        name="title" 
                        type="text" 
                        value={title}
                        onChange={handleInputChange}
                        placeholder="Research Title" 
                        className="input-elem"
                        required 
                    />
				</div>
				<div className="col-span-full">
					<label for="research-slug" className="text-sm">Research Slug</label>
					<textarea 
                        id="research-slug"
                        name="slug"
                        value={slug}
                        onChange={handleInputChange} 
                        placeholder="" 
                        className="input-elem"
                        required
                    />
				</div>
				<div className="col-span-full">
					<label for="research-desc" className="text-sm">Research Description</label>
					<textarea 
                        id="research-desc" 
                        name="description"
                        value={description}
                        onChange={handleInputChange}
                        placeholder="" 
                        className="input-elem"
                    />
				</div>
                <div className="col-span-3">
                    <label for="research-thumbnail" className="text-sm">
                        Research PDF
                    </label>
                    <div>
                        <input 
                            type='file' 
                            multiple
                            ref={pdfFileRef}
                            onChange={handleFileChange}
                        />
                        {/* <button 
                            type="button" 
                            className="px-4 py-2 border rounded-md dark:dark:border-gray-100"
                            onChange={() => pdfFileRef.current.focus()}
                        >
                            Upload PDF
                        </button> */}
                        {/* <button 
                            type="button" 
                            className="px-4 py-2 border rounded-md dark:dark:border-gray-100"
                        >
                            Upload Thumbnail
                        </button> */}
                    </div>
                </div>
                <button
                    type="submit"
                    className='btn-blue col-span-2 pt-3'
                >
                    Submit Research
                </button>
			</div>
		</fieldset>
	</form>
</section>
  )
}

export default ResearchUploadForm